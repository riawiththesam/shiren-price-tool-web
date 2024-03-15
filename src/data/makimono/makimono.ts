import { Item } from "../../types/Item";
import { PurchaseType } from "../../types/purchase";
import { mapToNormal, mapToNoroi, mapToShukufuku } from "../item/item";
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
    .map(mapToNoroi)
    .filter((item) => item[purchaseType] == price);

  const shukufukuList: Array<Item> = makimonoMaster.list
    .map(mapToShukufuku)
    .filter((item) => item[purchaseType] == price);

  const normalList: Array<Item> = makimonoMaster.list
    .map(mapToNormal)
    .filter((item) => item[purchaseType] == price);

  return [...noroiList, ...shukufukuList, ...normalList];
}
