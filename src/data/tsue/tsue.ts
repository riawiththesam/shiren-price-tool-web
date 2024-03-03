import { Item } from "../../types/Item";
import { PurchaseType } from "../../types/purchase";
import { itemStateRateMap } from "../item/item";
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
    .filter(
      (item) =>
        Math.floor(item[purchaseType] * itemStateRateMap["Noroi"]) == price
    )
    .map((item) => ({ ...item, state: "Noroi" }));

  const normalList: Array<Item> = tsueMaster.list
    .filter(
      (item) =>
        Math.floor(item[purchaseType] * itemStateRateMap["Normal"]) == price
    )
    .map((item) => ({ ...item, state: "Normal" }));

  return [...noroiList, ...normalList];
}
