import { useState } from "react";
import { Item } from "../../../types/Item.ts";
import { findMakimonoList } from "../../../data/makimono/makimono.ts";
import { findKusaList } from "../../../data/kusa/kusa.ts";
import { findTsuboList } from "../../../data/tsubo/tsubo.ts";
import { findTsueList } from "../../../data/tsue/tsue.ts";
import { findUdewaList } from "../../../data/udewa/udewa.ts";

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
