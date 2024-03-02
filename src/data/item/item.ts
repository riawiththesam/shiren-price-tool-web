import { ItemState } from "../../types/Item";

type ItemStateRateMapType = {
  [key in ItemState]: number;
};

export const itemStateRateMap: ItemStateRateMapType = {
  Normal: 1,
  Noroi: 0.87,
  Shukufuku: 2,
};
