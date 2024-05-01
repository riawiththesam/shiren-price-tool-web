import { Item, ItemState, MasterItem, ItemType } from "../../types/Item";

type ItemStateRateMapType = {
  [key in ItemState]: number;
};

export const itemStateRateMap: ItemStateRateMapType = {
  Normal: 1,
  Noroi: 0.87,
  Shukufuku: 2,
};

function itemTypeToPossibleStates(itemType: ItemType): Array<ItemState> {
  switch (itemType) {
    case "Makimono":
      return ["Noroi", "Shukufuku", "Normal"];
    case "Kusa":
      return ["Noroi", "Shukufuku", "Normal"];
    case "Udewa":
      return ["Noroi", "Normal"];
    case "Tsue":
      return ["Noroi", "Normal"];
    case "Tsubo":
      return ["Noroi", "Normal"];
  }
}

export function mapToNoroi(master: MasterItem, itemType: ItemType): Item {
  return {
    name: master.name,
    shortName: master.shortName ?? master.name.charAt(0),
    defaultBuy: master.buy,
    defaultSell: master.sell,
    unique: master.unique,
    buy: Math.floor(master.buy * itemStateRateMap["Noroi"]),
    sell: Math.floor(master.sell * itemStateRateMap["Noroi"]),
    state: "Noroi",
    itemType,
    possibleStates: itemTypeToPossibleStates(itemType),
  };
}

export function mapToShukufuku(master: MasterItem, itemType: ItemType): Item {
  return {
    name: master.name,
    shortName: master.shortName ?? master.name.charAt(0),
    defaultBuy: master.buy,
    defaultSell: master.sell,
    unique: master.unique,
    buy: Math.floor(master.buy * itemStateRateMap["Shukufuku"]),
    sell: Math.floor(master.sell * itemStateRateMap["Shukufuku"]),
    state: "Shukufuku",
    itemType,
    possibleStates: itemTypeToPossibleStates(itemType),
  };
}

export function mapToNormal(master: MasterItem, itemType: ItemType): Item {
  return {
    name: master.name,
    shortName: master.shortName ?? master.name.charAt(0),
    defaultBuy: master.buy,
    defaultSell: master.sell,
    unique: master.unique,
    buy: Math.floor(master.buy * itemStateRateMap["Normal"]),
    sell: Math.floor(master.sell * itemStateRateMap["Normal"]),
    state: "Normal",
    itemType,
    possibleStates: itemTypeToPossibleStates(itemType),
  };
}
