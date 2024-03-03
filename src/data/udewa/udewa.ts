import { Item } from "../../types/Item";
import { PurchaseType } from "../../types/purchase";
import { itemStateRateMap, purchaseTypeRateMap } from "../item/item";
import { list as udewaMaster } from "./item-udewa";

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
  const noroiRate =
    itemStateRateMap["Noroi"] * purchaseTypeRateMap[purchaseType];
  const noroiList: Array<Item> = udewaMaster.list
    .filter((item) => Math.floor(item.buy * noroiRate) == price)
    .map((item) => ({ ...item, state: "Noroi" }));

  const normalRate =
    itemStateRateMap["Normal"] * purchaseTypeRateMap[purchaseType];
  const normalList: Array<Item> = udewaMaster.list
    .filter((item) => Math.floor(item.buy * normalRate) == price)
    .map((item) => ({ ...item, state: "Normal" }));

  return [...noroiList, ...normalList];
}
