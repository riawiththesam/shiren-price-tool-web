import { getAllKusaList } from "../../../data/kusa/kusa";
import { getAllMakimonoList } from "../../../data/makimono/makimono";
import { Item } from "../../../types/Item";

export const useItemList = () => {
  const rawItemList: Array<Item> = [];
  rawItemList.push(...getAllKusaList());
  rawItemList.push(...getAllMakimonoList());

  rawItemList.sort((a, b) => {
    return a.buy - b.buy;
  });

  return {
    rawItemList,
  };
};
