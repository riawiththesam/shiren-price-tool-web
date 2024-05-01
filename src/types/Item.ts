export const ItemStateList = ["Normal", "Noroi", "Shukufuku"] as const;

export type ItemState = (typeof ItemStateList)[number];

export const ItemTypeList = [
  "Makimono",
  "Kusa",
  "Udewa",
  "Tsue",
  "Tsubo",
] as const;

export type ItemType = (typeof ItemTypeList)[number];

export const itemTypePossibleStatesMap: {
  [key in ItemType]: Array<ItemState>;
} = {
  Makimono: ["Noroi", "Shukufuku", "Normal"],
  Kusa: ["Noroi", "Shukufuku", "Normal"],
  Tsubo: ["Noroi", "Normal"],
  Tsue: ["Noroi", "Normal"],
  Udewa: ["Noroi", "Normal"],
};

export interface Item {
  name: string;
  shortName: string;
  defaultBuy: number;
  defaultSell: number;
  buy: number;
  sell: number;
  state: ItemState;
  master: MasterItem;
}

export interface MasterItem {
  name: string;
  shortName?: string;
  buy: number;
  sell: number;
  itemType: ItemType;
  // 識別する必要のないアイテム
  unique: boolean;
  // アイテムが取りうる状態
  possibleStates: Array<ItemState>;
}
