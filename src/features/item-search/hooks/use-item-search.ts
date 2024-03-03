import { useState } from "react";
import { Item } from "../../../types/Item.ts";
import { findMakimonoList } from "../../../data/makimono/makimono.ts";
import { findKusaList } from "../../../data/kusa/kusa.ts";
import { findTsuboList } from "../../../data/tsubo/tsubo.ts";
import { findTsueList } from "../../../data/tsue/tsue.ts";
import { findUdewaList } from "../../../data/udewa/udewa.ts";

export const useItemSearch = () => {
  const [makimonoList, setMakimonoList] = useState<Array<Item>>([]);
  const [buyUdewaList, setBuyUdewaList] = useState<Array<Item>>([]);
  const [sellUdewaList, setSellUdewaList] = useState<Array<Item>>([]);
  const [buyKusaList, setBuyKusaList] = useState<Array<Item>>([]);
  const [sellKusaList, setSellKusaList] = useState<Array<Item>>([]);
  const [buyTsueList, setBuyTsueList] = useState<Array<Item>>([]);
  const [sellTsueList, setSellTsueList] = useState<Array<Item>>([]);
  const [buyTsuboList, setBuyTsuboList] = useState<Array<Item>>([]);
  const [sellTsuboList, setSellTsuboList] = useState<Array<Item>>([]);

  const setPrice = (value: string) => {
    const price = Number.parseInt(value, 10);

    const nextMakimonoList = findMakimonoList(price);
    setMakimonoList(nextMakimonoList);

    setBuyUdewaList(findUdewaList(price, "buy"));
    setSellUdewaList(findUdewaList(price, "sell"));

    setBuyKusaList(findKusaList(price, "buy"));
    setSellKusaList(findKusaList(price, "sell"));

    setBuyTsueList(findTsueList(price, "buy"));
    setSellTsueList(findTsueList(price, "sell"));

    setBuyTsuboList(findTsuboList(price, "buy"));
    setSellTsuboList(findTsuboList(price, "sell"));
  };

  return {
    makimonoList,
    buyUdewaList,
    sellUdewaList,
    buyKusaList,
    sellKusaList,
    buyTsueList,
    sellTsueList,
    buyTsuboList,
    sellTsuboList,
    setPrice,
  };
};
