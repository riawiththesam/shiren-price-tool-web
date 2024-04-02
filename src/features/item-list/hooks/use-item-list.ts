import groupBy from "just-group-by";
import { getAllKusaList } from "../../../data/kusa/kusa";
import { getAllMakimonoList } from "../../../data/makimono/makimono";
import { getAllTsuboList } from "../../../data/tsubo/tsubo";
import { getAllTsueList } from "../../../data/tsue/tsue";
import { getAllUdewaList } from "../../../data/udewa/udewa";
import { Item, ItemType } from "../../../types/Item";
import { PurchaseType } from "../../../types/purchase";
import { atom, useAtom } from "jotai";

export type ShowBuyOrSellItems = "buy" | "sell";

export interface ItemFilter {
  showBuyOrSellItems: ShowBuyOrSellItems;
  showItemType: ItemType;
}

export interface ItemWithPurchseType {
  purchaseType: PurchaseType;
  item: Item;
}

interface ItemListStateAtom {
  groupedList: Array<{
    value: string;
    itemList: Array<ItemWithPurchseType>;
    opened: boolean;
  }>;
  filter: ItemFilter;
}

const itemListStateAtom = atom<ItemListStateAtom>({
  groupedList: getFullGroupedList().map((group) => {
    return {
      value: group.value,
      itemList: group.itemList,
      opened: false,
    };
  }),
  filter: {
    showBuyOrSellItems: "buy",
    showItemType: "Kusa",
  },
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

export const useItemList = () => {
  const [itemListState, setItemListState] = useAtom(itemListStateAtom);

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
        showBuyOrSellItems: purchaseType,
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

  return {
    itemListState,
    setPurchaseType,
    setItemType,
    toggleItemOpened,
  };
};
