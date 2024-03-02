import { Item } from "../../types/Item";
import { itemStateRateMap } from "../item/item";
import { fullList as tsueMaster } from "./item-tsue";

/**
 * 杖を価格で検索する
 * 杖は呪い、通常が存在する
 *
 * @param price
 * @returns
 */
export function findTsueList(price: number): Array<Item> {
  const noroiList: Array<Item> = tsueMaster.list
    .filter((item) => Math.floor(item.buy * itemStateRateMap["Noroi"]) == price)
    .map((item) => ({ ...item, state: "Noroi" }));

  const normalList: Array<Item> = tsueMaster.list
    .filter(
      (item) => Math.floor(item.buy * itemStateRateMap["Normal"]) == price
    )
    .map((item) => ({ ...item, state: "Normal" }));

  return [...noroiList, ...normalList];
}
