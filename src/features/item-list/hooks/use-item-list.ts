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
  showItemType: ItemType;
  enableUnique: boolean;
}

export interface ItemWithPurchseType {
  purchaseType: PurchaseType;
  item: Item;
}

export interface ItemGroup {
  value: string;
  itemList: Array<ItemWithPurchseType>;
  opened: boolean;
}

interface ItemListState {
  groupedList: Array<ItemGroup>;
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
const initialGroupedList = getFullGroupedList().map((group) => {
  return {
    value: group.value,
    itemList: group.itemList,
    opened: false,
  };
});

const itemListStateAtom = atom<ItemListState>({
  groupedList: initialGroupedList,
  filter: initialFilter,
});

const filteredListStateAtom = atom<FilterdItemListState>((get) => {
  const itemListState = get(itemListStateAtom);
  return {
    filteredList: itemListState.groupedList.map((group) => {
      return {
        ...group,
        itemList: filterItemList(group.itemList, itemListState.filter),
      };
    }),
  };
});

function getFullGroupedList(): Array<{
  value: string;
  itemList: ItemWithPurchseType[];
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

  const buyItemList: Array<ItemWithPurchseType> = rawItemList.map((item) => {
    return {
      purchaseType: "buy",
      item,
    };
  });
  const sellItemList: Array<ItemWithPurchseType> = rawItemList.map((item) => {
    return {
      purchaseType: "sell",
      item,
    };
  });
  const itemWithPurchseTypeList = [...buyItemList, ...sellItemList];

  const grouped = groupBy(
    itemWithPurchseTypeList,
    (pair) => pair.item[pair.purchaseType]
  );
  const groupedList = Object.entries(grouped).map(([value, itemList]) => {
    return {
      value,
      itemList,
    };
  });

  return groupedList;
}

function filterItemList(
  itemList: Array<ItemWithPurchseType>,
  filter: ItemFilter
): Array<ItemWithPurchseType> {
  let filteredList = itemList;

  // 購入アイテムを表示しない設定のときはpurchseTypeがbuyのものを除く
  if (filter.purchaseType != "buy") {
    filteredList = filteredList.filter((pair) => pair.purchaseType != "buy");
  }
  // 売却アイテムを表示しない設定のときはpurchseTypeがsellのものを除く
  if (filter.purchaseType != "sell") {
    filteredList = filteredList.filter((pair) => pair.purchaseType != "sell");
  }

  // 草
  if (filter.showItemType != "Kusa") {
    filteredList = filteredList.filter((pair) => pair.item.itemType != "Kusa");
  }

  // 巻物
  if (filter.showItemType != "Makimono") {
    filteredList = filteredList.filter(
      (pair) => pair.item.itemType != "Makimono"
    );
  }

  // 壺
  if (filter.showItemType != "Tsubo") {
    filteredList = filteredList.filter((pair) => pair.item.itemType != "Tsubo");
  }

  // 杖
  if (filter.showItemType != "Tsue") {
    filteredList = filteredList.filter((pair) => pair.item.itemType != "Tsue");
  }

  // 腕輪
  if (filter.showItemType != "Udewa") {
    filteredList = filteredList.filter((pair) => pair.item.itemType != "Udewa");
  }

  // 識別不要アイテムを表示しない場合、ユニークフラグのないアイテムのみにする
  if (!filter.enableUnique) {
    filteredList = filteredList.filter((pair) => !pair.item.unique);
  }

  return filteredList;
}

export const useItemList = () => {
  const [itemListState, setItemListState] = useAtom(itemListStateAtom);
  const [filteredItemListState] = useAtom(filteredListStateAtom);

  function toggleItemOpened(value: string) {
    const next = itemListState.groupedList.map((group) => {
      return {
        ...group,
        opened: group.value == value ? !group.opened : group.opened,
      };
    });
    setItemListState({
      ...itemListState,
      groupedList: next,
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

  function setItemType(itemType: ItemType) {
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
