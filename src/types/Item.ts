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

export interface Item {
  name: string;
  defaultBuy: number;
  defaultSell: number;
  buy: number;
  sell: number;
  state: ItemState;
  itemType: ItemType;
}

export interface MasterItem {
  name: string;
  buy: number;
  sell: number;
}
