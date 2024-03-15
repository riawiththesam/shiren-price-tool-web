import { Item } from "../../types/Item";
import { mapToNormal, mapToNoroi } from "../item/item";
import { fullList as tsuboMaster } from "./item-tsubo";
import { PurchaseType } from "../../types/purchase";

/**
 * 壺を価格で検索する
 * 壺は呪い、通常が存在する
 *
 * @param price
 * @param purchaseType
 * @returns
 */
export function findTsuboList(
  price: number,
  purchaseType: PurchaseType
): Array<Item> {
  const noroiList: Array<Item> = tsuboMaster.list
    .map((item) => mapToNoroi(item, "Tsubo"))
    .filter((item) => item[purchaseType] == price);

  const normalList: Array<Item> = tsuboMaster.list
    .map((item) => mapToNormal(item, "Tsubo"))
    .filter((item) => item[purchaseType] == price);

  return [...noroiList, ...normalList];
}

export function getAllTsuboList(): Array<Item> {
  const noroiList: Array<Item> = tsuboMaster.list.map((item) =>
    mapToNoroi(item, "Tsubo")
  );

  const normalList: Array<Item> = tsuboMaster.list.map((item) =>
    mapToNormal(item, "Tsubo")
  );

  return [...noroiList, ...normalList];
}
