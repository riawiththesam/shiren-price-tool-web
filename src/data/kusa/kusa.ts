import { Item } from "../../types/Item";
import { itemStateRateMap } from "../item/item";
import { list as kusaMaster } from "./item-kusa";

/**
 * 草を価格で検索する
 * 草は呪い、祝福、通常が存在する
 *
 * @param price
 * @returns
 */
export function findKusaList(price: number): Array<Item> {
  const noroiList: Array<Item> = kusaMaster.list
    .filter((item) => Math.floor(item.buy * itemStateRateMap["Noroi"]) == price)
    .map((item) => ({ ...item, state: "Noroi" }));

  const shukufukuList: Array<Item> = kusaMaster.list
    .filter(
      (item) => Math.floor(item.buy * itemStateRateMap["Shukufuku"]) == price
    )
    .map((item) => ({ ...item, state: "Shukufuku" }));

  const normalList: Array<Item> = kusaMaster.list
    .filter(
      (item) => Math.floor(item.buy * itemStateRateMap["Normal"]) == price
    )
    .map((item) => ({ ...item, state: "Normal" }));

  return [...noroiList, ...shukufukuList, ...normalList];
}
