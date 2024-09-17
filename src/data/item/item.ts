import { Item, ItemState, MasterItem } from "../../types/Item";

type ItemStateRateMapType = {
  [key in ItemState]: number;
};

export const itemStateRateMap: ItemStateRateMapType = {
  Normal: 1,
  Noroi: 0.87,
  Shukufuku: 2,
};

/**
 * アイテムマスタの情報から呪われたアイテム情報を生成
 *
 * @param master
 * @returns
 */
export function mapToNoroi(master: MasterItem): Item {
  return {
    name: master.name,
    shortName: master.shortName ?? master.name.charAt(0),
    defaultBuy: master.buy,
    defaultSell: master.sell,
    buy: Math.floor(master.buy * itemStateRateMap["Noroi"]),
    sell: Math.floor(master.sell * itemStateRateMap["Noroi"]),
    state: "Noroi",
    master: master,
  };
}

/**
 * アイテムマスタの情報から祝福されたアイテム情報を生成
 *
 * @param master
 * @returns
 */
export function mapToShukufuku(master: MasterItem): Item {
  return {
    name: master.name,
    shortName: master.shortName ?? master.name.charAt(0),
    defaultBuy: master.buy,
    defaultSell: master.sell,
    buy: Math.floor(master.buy * itemStateRateMap["Shukufuku"]),
    sell: Math.floor(master.sell * itemStateRateMap["Shukufuku"]),
    state: "Shukufuku",
    master: master,
  };
}

/**
 * アイテムマスタの情報から呪い、祝福でない通常のアイテム情報を生成
 *
 * @param master
 * @returns
 */
export function mapToNormal(master: MasterItem): Item {
  return {
    name: master.name,
    shortName: master.shortName ?? master.name.charAt(0),
    defaultBuy: master.buy,
    defaultSell: master.sell,
    buy: Math.floor(master.buy * itemStateRateMap["Normal"]),
    sell: Math.floor(master.sell * itemStateRateMap["Normal"]),
    state: "Normal",
    master: master,
  };
}
