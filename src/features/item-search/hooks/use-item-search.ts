import { useState } from "react";
import { list as makimonoMaster } from "./item-makimono.ts";
import { list as udewaMaster } from "./item-udewa.ts";
import { list as kusaMaster } from "./item-kusa.ts";
import { Item } from "../types/Item.ts";

export const useItemSearch = () => {
  const [makimonoList, setMakimonoList] = useState<Array<Item>>([]);
  const [udewaList, setUdewaList] = useState<Array<Item>>([]);
  const [kusaList, setKusaList] = useState<Array<Item>>([]);

  const setPrice = (value: string) => {
    const numberValue = Number.parseInt(value, 10);
    const nextMakimonoList = makimonoMaster.list.filter((item) => {
      return item.buy == numberValue;
    });
    setMakimonoList(nextMakimonoList);

    const nextUdewaList = udewaMaster.list.filter(
      (item) => item.buy == numberValue
    );
    setUdewaList(nextUdewaList);

    const nextKusaList = kusaMaster.list.filter(
      (item) => item.buy == numberValue
    );
    setKusaList(nextKusaList);
  };
  return { makimonoList, udewaList, kusaList, setPrice };
};
