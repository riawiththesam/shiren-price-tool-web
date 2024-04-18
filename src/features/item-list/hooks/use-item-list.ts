import groupBy from "just-group-by";
import { getAllKusaList } from "../../../data/kusa/kusa";
import { getAllMakimonoList } from "../../../data/makimono/makimono";
import { getAllTsuboList } from "../../../data/tsubo/tsubo";
import { getAllTsueList } from "../../../data/tsue/tsue";
import { getAllUdewaList } from "../../../data/udewa/udewa";
import { Item, ItemType } from "../../../types/Item";
import { PurchaseType } from "../../../types/purchase";
import { atom, useAtom } from "jotai";

export interface ItemFilter {
  purchaseType: PurchaseType;
  showItemType: ItemType | "All";
  enableUnique: boolean;
}

export interface ItemGroup {
  value: string;
  itemList: Array<Item>;
  opened: boolean;
}

interface ItemListState {
  groupedListSet: {
    buy: Array<ItemGroup>;
    sell: Array<ItemGroup>;
  };
  filter: ItemFilter;
}

interface FilterdItemListState {
  filteredList: Array<ItemGroup>;
}

const initialFilter: ItemFilter = {
  purchaseType: "buy",
  showItemType: "Kusa",
  enableUnique: false,
};
const initialBuyGroupedList = getFullGroupedList("buy").map((group) => {
  return {
    value: group.value,
    itemList: group.itemList,
    opened: false,
  };
});
const initialSellGroupedList = getFullGroupedList("sell").map((group) => {
  return {
    value: group.value,
    itemList: group.itemList,
    opened: false,
  };
});

const itemListStateAtom = atom<ItemListState>({
  groupedListSet: {
    buy: initialBuyGroupedList,
    sell: initialSellGroupedList,
  },
  filter: initialFilter,
});

const filteredListStateAtom = atom<FilterdItemListState>((get) => {
  const itemListState = get(itemListStateAtom);
  return {
    filteredList: itemListState.groupedListSet[
      itemListState.filter.purchaseType
    ].map((group) => {
      return {
        ...group,
        itemList: filterItemList(group.itemList, itemListState.filter),
      };
    }),
  };
});

function getFullGroupedList(purchaseType: PurchaseType): Array<{
  value: string;
  itemList: Item[];
}> {
  const rawItemList: Array<Item> = [];
  rawItemList.push(...getAllKusaList());
  rawItemList.push(...getAllMakimonoList());
  rawItemList.push(...getAllTsuboList());
  rawItemList.push(...getAllTsueList());
  rawItemList.push(...getAllUdewaList());

  rawItemList.sort((a, b) => {
    return a.buy - b.buy;
  });

  const grouped = groupBy(rawItemList, (item) => item[purchaseType]);
  const groupedList = Object.entries(grouped).map(([value, itemList]) => {
    return {
      value,
      itemList,
    };
  });

  return groupedList;
}

function filterItemList(
  itemList: Array<Item>,
  filter: ItemFilter
): Array<Item> {
  let filteredList = itemList;

  // ItemTypeでフィルターが設定されている場合は、そのItemTypeのみにする
  if (filter.showItemType != "All") {
    filteredList = filteredList.filter(
      (item) => item.itemType == filter.showItemType
    );
  }

  // 識別不要アイテムを表示しない場合、ユニークフラグのないアイテムのみにする
  if (!filter.enableUnique) {
    filteredList = filteredList.filter((item) => !item.unique);
  }

  return filteredList;
}

export const useItemList = () => {
  const [itemListState, setItemListState] = useAtom(itemListStateAtom);
  const [filteredItemListState] = useAtom(filteredListStateAtom);

  function toggleItemOpened(value: string) {
    const next = itemListState.groupedListSet[
      itemListState.filter.purchaseType
    ].map((group) => {
      return {
        ...group,
        opened: group.value == value ? !group.opened : group.opened,
      };
    });
    setItemListState({
      ...itemListState,
      groupedListSet: {
        ...itemListState.groupedListSet,
        [itemListState.filter.purchaseType]: next,
      },
    });
  }

  function setPurchaseType(purchaseType: PurchaseType) {
    setItemListState({
      ...itemListState,
      filter: {
        ...itemListState.filter,
        purchaseType: purchaseType,
      },
    });
  }

  function setItemType(itemType: ItemType | "All") {
    setItemListState({
      ...itemListState,
      filter: {
        ...itemListState.filter,
        showItemType: itemType,
      },
    });
  }

  function setEnableUnique(enable: boolean) {
    setItemListState({
      ...itemListState,
      filter: {
        ...itemListState.filter,
        enableUnique: enable,
      },
    });
  }

  return {
    itemListState,
    filteredItemListState,
    setPurchaseType,
    setItemType,
    setEnableUnique,
    toggleItemOpened,
  };
};
