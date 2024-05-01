import { Item } from "../../types/Item";
import { PurchaseType } from "../../types/purchase";
import { mapToNormal, mapToNoroi, mapToShukufuku } from "../item/item";
import { fullList as makimonoMaster } from "./item-makimono";

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
    .map((item) => mapToNoroi(item))
    .filter((item) => item[purchaseType] == price);

  const shukufukuList: Array<Item> = makimonoMaster.list
    .map((item) => mapToShukufuku(item))
    .filter((item) => item[purchaseType] == price);

  const normalList: Array<Item> = makimonoMaster.list
    .map((item) => mapToNormal(item))
    .filter((item) => item[purchaseType] == price);

  return [...noroiList, ...shukufukuList, ...normalList];
}

export function getAllMakimonoList(): Array<Item> {
  const noroiList: Array<Item> = makimonoMaster.list.map((item) =>
    mapToNoroi(item)
  );

  const shukufukuList: Array<Item> = makimonoMaster.list.map((item) =>
    mapToShukufuku(item)
  );

  const normalList: Array<Item> = makimonoMaster.list.map((item) =>
    mapToNormal(item)
  );

  return [...noroiList, ...shukufukuList, ...normalList];
}
