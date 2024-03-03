import { Item } from "../../types/Item";
import { itemStateRateMap } from "../item/item";
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
    .filter(
      (item) =>
        Math.floor(item[purchaseType] * itemStateRateMap["Noroi"]) == price
    )
    .map((item) => ({ ...item, state: "Noroi" }));

  const normalList: Array<Item> = tsuboMaster.list
    .filter(
      (item) =>
        Math.floor(item[purchaseType] * itemStateRateMap["Normal"]) == price
    )
    .map((item) => ({ ...item, state: "Normal" }));

  return [...noroiList, ...normalList];
}
