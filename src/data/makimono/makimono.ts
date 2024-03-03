import { Item } from "../../types/Item";
import { PurchaseType } from "../../types/purchase";
import { itemStateRateMap, purchaseTypeRateMap } from "../item/item";
import { list as makimonoMaster } from "./item-makimono";

/**
 * 巻物を価格で検索する
 * 巻物は呪い、祝福、通常が存在する
 *
 * @param price
 * @param purchaseType
 * @returns
 */
export function findMakimonoList(
  price: number,
  purchaseType: PurchaseType
): Array<Item> {
  const noroiRate =
    itemStateRateMap["Noroi"] * purchaseTypeRateMap[purchaseType];
  const noroiList: Array<Item> = makimonoMaster.list
    .filter((item) => Math.floor(item.buy * noroiRate) == price)
    .map((item) => ({ ...item, state: "Noroi" }));

  const shukufukuRate =
    itemStateRateMap["Shukufuku"] * purchaseTypeRateMap[purchaseType];
  const shukufukuList: Array<Item> = makimonoMaster.list
    .filter((item) => Math.floor(item.buy * shukufukuRate) == price)
    .map((item) => ({ ...item, state: "Shukufuku" }));

  const normalRate =
    itemStateRateMap["Normal"] * purchaseTypeRateMap[purchaseType];
  const normalList: Array<Item> = makimonoMaster.list
    .filter((item) => Math.floor(item.buy * normalRate) == price)
    .map((item) => ({ ...item, state: "Normal" }));

  return [...noroiList, ...shukufukuList, ...normalList];
}
