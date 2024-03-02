import { Item } from "../../types/Item";
import { itemStateRateMap } from "../item/item";
import { list as udewaMaster } from "./item-udewa";

/**
 * 腕輪を価格で検索する
 * 腕輪は呪い、通常が存在する
 *
 * @param price
 * @returns
 */
export function findUdewaList(price: number): Array<Item> {
  const noroiList: Array<Item> = udewaMaster.list
    .filter((item) => Math.floor(item.buy * itemStateRateMap["Noroi"]) == price)
    .map((item) => ({ ...item, state: "Noroi" }));

  const normalList: Array<Item> = udewaMaster.list
    .filter(
      (item) => Math.floor(item.buy * itemStateRateMap["Normal"]) == price
    )
    .map((item) => ({ ...item, state: "Normal" }));

  return [...noroiList, ...normalList];
}
