import { useState } from "react";
import { list as makimonoMaster } from "./item-makimono.ts";
import { list as udewaMaster } from "./item-udewa.ts";
import { list as kusaMaster } from "./item-kusa.ts";
import { fullList as tsueMaster } from "./item-tsue.ts";
import { Item, ItemState, MasterItem } from "../types/Item.ts";

type ItemStateRateMapType = {
  [key in ItemState]: number;
};

const itemStateRateMap: ItemStateRateMapType = {
  Normal: 1,
  Noroi: 0.87,
  Shukufuku: 2,
};

function findItemList(
  masterList: Array<MasterItem>,
  price: number
): Array<Item> {
  const noroiList: Array<Item> = masterList
    .filter((item) => Math.floor(item.buy * itemStateRateMap["Noroi"]) == price)
    .map((item) => ({ ...item, state: "Noroi" }));

  const shukufukuList: Array<Item> = masterList
    .filter(
      (item) => Math.floor(item.buy * itemStateRateMap["Shukufuku"]) == price
    )
    .map((item) => ({ ...item, state: "Shukufuku" }));

  const normalList: Array<Item> = masterList
    .filter(
      (item) => Math.floor(item.buy * itemStateRateMap["Normal"]) == price
    )
    .map((item) => ({ ...item, state: "Normal" }));

  return [...noroiList, ...shukufukuList, ...normalList];
}

export const useItemSearch = () => {
  const [makimonoList, setMakimonoList] = useState<Array<Item>>([]);
  const [udewaList, setUdewaList] = useState<Array<Item>>([]);
  const [kusaList, setKusaList] = useState<Array<Item>>([]);
  const [tsueList, setTsueList] = useState<Array<Item>>([]);

  const setPrice = (value: string) => {
    const price = Number.parseInt(value, 10);

    const nextMakimonoList = findItemList(makimonoMaster.list, price);
    setMakimonoList(nextMakimonoList);

    const nextUdewaList = findItemList(udewaMaster.list, price);
    setUdewaList(nextUdewaList);

    const nextKusaList = findItemList(kusaMaster.list, price);
    setKusaList(nextKusaList);

    const nextTsueList = findItemList(tsueMaster.list, price);
    setTsueList(nextTsueList);
  };
  return { makimonoList, udewaList, kusaList, tsueList, setPrice };
};
