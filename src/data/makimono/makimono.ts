import { Item } from "../../types/Item";
import { PurchaseType } from "../../types/purchase";
import { itemStateRateMap } from "../item/item";
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
  const noroiList: Array<Item> = makimonoMaster.list
    .filter(
      (item) =>
        Math.floor(item[purchaseType] * itemStateRateMap["Noroi"]) == price
    )
    .map((item) => ({ ...item, state: "Noroi" }));

  const shukufukuList: Array<Item> = makimonoMaster.list
    .filter(
      (item) =>
        Math.floor(item[purchaseType] * itemStateRateMap["Shukufuku"]) == price
    )
    .map((item) => ({ ...item, state: "Shukufuku" }));

  const normalList: Array<Item> = makimonoMaster.list
    .filter(
      (item) =>
        Math.floor(item[purchaseType] * itemStateRateMap["Normal"]) == price
    )
    .map((item) => ({ ...item, state: "Normal" }));

  return [...noroiList, ...shukufukuList, ...normalList];
}
