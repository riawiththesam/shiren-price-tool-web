import { Item } from "../../types/Item";
import { PurchaseType } from "../../types/purchase";
import { mapToNormal, mapToNoroi } from "../item/item";
import { fullList as udewaMaster } from "./item-udewa";

/**
 * 腕輪を価格で検索する
 * 腕輪は呪い、通常が存在する
 *
 * @param price
 * @param purchaseType
 * @returns
 */
export function findUdewaList(
  price: number,
  purchaseType: PurchaseType
): Array<Item> {
  const noroiList: Array<Item> = udewaMaster.list
    .map((item) => mapToNoroi(item))
    .filter((item) => item[purchaseType] == price);

  const normalList: Array<Item> = udewaMaster.list
    .map((item) => mapToNormal(item))
    .filter((item) => item[purchaseType] == price);

  return [...noroiList, ...normalList];
}

export function getAllUdewaList() {
  const noroiList: Array<Item> = udewaMaster.list.map((item) =>
    mapToNoroi(item)
  );

  const normalList: Array<Item> = udewaMaster.list.map((item) =>
    mapToNormal(item)
  );

  return [...noroiList, ...normalList];
}
