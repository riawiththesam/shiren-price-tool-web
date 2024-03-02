import { useState } from "react";
import { list as makimonoMaster } from "./item-makimono.ts";
import { list as udewaMaster } from "./item-udewa.ts";
import { list as kusaMaster } from "./item-kusa.ts";
import { fullList as tsueMaster } from "./item-tsue.ts";
import { fullList as tsuboMaster } from "./item-tsubo.ts";
import { Item, ItemState } from "../../../types/Item.ts";

type ItemStateRateMapType = {
  [key in ItemState]: number;
};

const itemStateRateMap: ItemStateRateMapType = {
  Normal: 1,
  Noroi: 0.87,
  Shukufuku: 2,
};

/**
 * 巻物を価格で検索する
 * 巻物は呪い、祝福、通常が存在する
 *
 * @param price
 * @returns
 */
function findMakimonoList(price: number): Array<Item> {
  const noroiList: Array<Item> = makimonoMaster.list
    .filter((item) => Math.floor(item.buy * itemStateRateMap["Noroi"]) == price)
    .map((item) => ({ ...item, state: "Noroi" }));

  const shukufukuList: Array<Item> = makimonoMaster.list
    .filter(
      (item) => Math.floor(item.buy * itemStateRateMap["Shukufuku"]) == price
    )
    .map((item) => ({ ...item, state: "Shukufuku" }));

  const normalList: Array<Item> = makimonoMaster.list
    .filter(
      (item) => Math.floor(item.buy * itemStateRateMap["Normal"]) == price
    )
    .map((item) => ({ ...item, state: "Normal" }));

  return [...noroiList, ...shukufukuList, ...normalList];
}

/**
 * 腕輪を価格で検索する
 * 腕輪は呪い、通常が存在する
 *
 * @param price
 * @returns
 */
function findUdewaList(price: number): Array<Item> {
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

/**
 * 草を価格で検索する
 * 草は呪い、祝福、通常が存在する
 *
 * @param price
 * @returns
 */
function findKusaList(price: number): Array<Item> {
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

/**
 * 杖を価格で検索する
 * 杖は呪い、通常が存在する
 *
 * @param price
 * @returns
 */
function findTsueList(price: number): Array<Item> {
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

/**
 * 壺を価格で検索する
 * 壺は呪い、通常が存在する
 *
 * @param price
 * @returns
 */
function findTsuboList(price: number): Array<Item> {
  const noroiList: Array<Item> = tsuboMaster.list
    .filter((item) => Math.floor(item.buy * itemStateRateMap["Noroi"]) == price)
    .map((item) => ({ ...item, state: "Noroi" }));

  const normalList: Array<Item> = tsuboMaster.list
    .filter(
      (item) => Math.floor(item.buy * itemStateRateMap["Normal"]) == price
    )
    .map((item) => ({ ...item, state: "Normal" }));

  return [...noroiList, ...normalList];
}

export const useItemSearch = () => {
  const [makimonoList, setMakimonoList] = useState<Array<Item>>([]);
  const [udewaList, setUdewaList] = useState<Array<Item>>([]);
  const [kusaList, setKusaList] = useState<Array<Item>>([]);
  const [tsueList, setTsueList] = useState<Array<Item>>([]);
  const [tsuboList, setTsuboList] = useState<Array<Item>>([]);

  const setPrice = (value: string) => {
    const price = Number.parseInt(value, 10);

    const nextMakimonoList = findMakimonoList(price);
    setMakimonoList(nextMakimonoList);

    const nextUdewaList = findUdewaList(price);
    setUdewaList(nextUdewaList);

    const nextKusaList = findKusaList(price);
    setKusaList(nextKusaList);

    const nextTsueList = findTsueList(price);
    setTsueList(nextTsueList);

    const nextTsuboList = findTsuboList(price);
    setTsuboList(nextTsuboList);
  };
  return { makimonoList, udewaList, kusaList, tsueList, tsuboList, setPrice };
};
