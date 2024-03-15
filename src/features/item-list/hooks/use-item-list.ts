import { getAllKusaList } from "../../../data/kusa/kusa";
import { Item } from "../../../types/Item";

export const useItemList = () => {
  const rawItemList: Array<Item> = [];
  rawItemList.push(...getAllKusaList());

  return {
    rawItemList,
  };
};
