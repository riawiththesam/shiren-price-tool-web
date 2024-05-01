import { Item } from "../../types/Item";
import { PurchaseType } from "../../types/purchase";
import { mapToNormal, mapToNoroi, mapToShukufuku } from "../item/item";
import { fullList as kusaMaster } from "./item-kusa";

/**
 * 草を価格で検索する
 * 草は呪い、祝福、通常が存在する
 *
 * @param price
 * @param purchaseType
 * @returns
 */
export function findKusaList(
  price: number,
  purchaseType: PurchaseType
): Array<Item> {
  const noroiList: Array<Item> = kusaMaster.list
    .map((item) => mapToNoroi(item, "Kusa"))
    .filter((item) => item[purchaseType] == price);

  const shukufukuList: Array<Item> = kusaMaster.list
    .map((item) => mapToShukufuku(item, "Kusa"))
    .filter((item) => item[purchaseType] == price);

  const normalList: Array<Item> = kusaMaster.list
    .map((item) => mapToNormal(item, "Kusa"))
    .filter((item) => item[purchaseType] == price);

  return [...noroiList, ...shukufukuList, ...normalList];
}

export function getAllKusaList(): Array<Item> {
  const noroiList: Array<Item> = kusaMaster.list.map((item) =>
    mapToNoroi(item, "Kusa")
  );

  const shukufukuList: Array<Item> = kusaMaster.list.map((item) =>
    mapToShukufuku(item, "Kusa")
  );

  const normalList: Array<Item> = kusaMaster.list.map((item) =>
    mapToNormal(item, "Kusa")
  );

  return [...noroiList, ...shukufukuList, ...normalList];
}
