export const ItemStateList = ["Normal", "Noroi", "Shukufuku"] as const;

export type ItemState = (typeof ItemStateList)[number];

export const ItemTypeList = ["Makimono", "Kusa", "Udewa"] as const;

export type ItemType = (typeof ItemTypeList)[number];

export interface Item {
  name: string;
  buy: number;
  state: ItemState;
}

export interface MasterItem {
  name: string;
  buy: number;
}
