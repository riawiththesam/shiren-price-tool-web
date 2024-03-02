import { ItemState } from "../../types/Item";
import { PurchaseType } from "../../types/purchase";

type ItemStateRateMapType = {
  [key in ItemState]: number;
};

export const itemStateRateMap: ItemStateRateMapType = {
  Normal: 1,
  Noroi: 0.87,
  Shukufuku: 2,
};

type PurchaseTypeRateMapType = {
  [key in PurchaseType]: number;
};

export const purchaseTypeRateMap: PurchaseTypeRateMapType = {
  buy: 1,
  sell: 0.4,
};
