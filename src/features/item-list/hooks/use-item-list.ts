import groupBy from "just-group-by";
import { getAllKusaList } from "../../../data/kusa/kusa";
import { getAllMakimonoList } from "../../../data/makimono/makimono";
import { getAllTsuboList } from "../../../data/tsubo/tsubo";
import { getAllTsueList } from "../../../data/tsue/tsue";
import { getAllUdewaList } from "../../../data/udewa/udewa";
import { Item } from "../../../types/Item";
import { PurchaseType } from "../../../types/purchase";
import { useState } from "react";

export interface ItemWithPurchseType {
  purchaseType: PurchaseType;
  item: Item;
}

interface ItemListState {
  groupedList: Array<{
    value: string;
    itemList: Array<ItemWithPurchseType>;
    opened: boolean;
  }>;
}

export const useItemList = () => {
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

  const [itemListState, setItemListState] = useState<ItemListState>({
    groupedList: groupedList.map((group) => {
      return {
        value: group.value,
        itemList: group.itemList,
        opened: false,
      };
    }),
  });

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

  return {
    itemListState,
    toggleItemOpened,
  };
};
