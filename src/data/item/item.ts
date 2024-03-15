import { Item, ItemState, MasterItem } from "../../types/Item";

type ItemStateRateMapType = {
  [key in ItemState]: number;
};

export const itemStateRateMap: ItemStateRateMapType = {
  Normal: 1,
  Noroi: 0.87,
  Shukufuku: 2,
};

export function mapToNoroi(master: MasterItem): Item {
  return {
    name: master.name,
    defaultBuy: master.buy,
    defaultSell: master.sell,
    buy: Math.floor(master.buy * itemStateRateMap["Noroi"]),
    sell: Math.floor(master.sell * itemStateRateMap["Noroi"]),
    state: "Noroi",
  };
}

export function mapToShukufuku(master: MasterItem): Item {
  return {
    name: master.name,
    defaultBuy: master.buy,
    defaultSell: master.sell,
    buy: Math.floor(master.buy * itemStateRateMap["Shukufuku"]),
    sell: Math.floor(master.sell * itemStateRateMap["Shukufuku"]),
    state: "Shukufuku",
  };
}

export function mapToNormal(master: MasterItem): Item {
  return {
    name: master.name,
    defaultBuy: master.buy,
    defaultSell: master.sell,
    buy: Math.floor(master.buy * itemStateRateMap["Normal"]),
    sell: Math.floor(master.sell * itemStateRateMap["Normal"]),
    state: "Normal",
  };
}
