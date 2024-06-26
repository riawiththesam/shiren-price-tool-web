import { Item } from "../../types/Item";
import { PurchaseType } from "../../types/purchase";
import { mapToNormal, mapToNoroi } from "../item/item";
import { fullList as tsueMaster } from "./item-tsue";

/**
 * 杖を価格で検索する
 * 杖は呪い、通常が存在する
 *
 * @param price
 * @param purchaseType
 * @returns
 */
export function findTsueList(
  price: number,
  purchaseType: PurchaseType
): Array<Item> {
  const noroiList: Array<Item> = tsueMaster.list
    .map((item) => mapToNoroi(item))
    .filter((item) => item[purchaseType] == price);

  const normalList: Array<Item> = tsueMaster.list
    .map((item) => mapToNormal(item))
    .filter((item) => item[purchaseType] == price);

  return [...noroiList, ...normalList];
}

export function getAllTsueList() {
  const noroiList: Array<Item> = tsueMaster.list.map((item) =>
    mapToNoroi(item)
  );

  const normalList: Array<Item> = tsueMaster.list.map((item) =>
    mapToNormal(item)
  );

  return [...noroiList, ...normalList];
}
