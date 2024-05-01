import range from "just-range";
import { MasterItem, itemTypePossibleStatesMap } from "../../types/Item";

export const list = {
  list: [
    {
      name: "保存の壺",
      buy: 800,
      sell: 320,
      unique: false,
      min: 3,
      max: 5,
    },
    {
      name: "識別の壺",
      buy: 800,
      sell: 320,
      unique: false,
      min: 3,
      max: 5,
    },
    {
      name: "変化の壺",
      buy: 800,
      sell: 320,
      unique: false,
      min: 3,
      max: 5,
    },
    {
      name: "ただの壺",
      buy: 800,
      sell: 320,
      unique: false,
      min: 3,
      max: 5,
    },
    {
      name: "やりすごしの壺",
      buy: 800,
      sell: 320,
      unique: false,
      min: 3,
      max: 5,
    },
    {
      name: "換金の壺",
      buy: 1000,
      sell: 400,
      unique: false,
      min: 3,
      max: 5,
    },
    {
      name: "手封じの壺",
      buy: 1000,
      sell: 400,
      unique: false,
      min: 3,
      max: 5,
    },
    {
      name: "割れない壺",
      buy: 1000,
      sell: 400,
      unique: false,
      min: 3,
      max: 5,
    },
    {
      name: "倉庫の壺",
      buy: 1000,
      sell: 400,
      unique: false,
      min: 2,
      max: 5,
    },
    {
      name: "底抜けの壺",
      buy: 1000,
      sell: 400,
      unique: false,
      min: 2,
      max: 4,
    },
    {
      name: "おはらいの壺",
      shortName: "祓",
      buy: 1600,
      sell: 640,
      unique: false,
      min: 2,
      max: 4,
    },
    {
      name: "呪いの壺",
      buy: 1600,
      sell: 640,
      unique: false,
      min: 2,
      max: 4,
    },
    {
      name: "背中の壺",
      buy: 2000,
      sell: 800,
      unique: false,
      min: 3,
      max: 5,
    },
    {
      name: "トドの壺",
      buy: 2000,
      sell: 800,
      unique: false,
      min: 3,
      max: 5,
    },
    {
      name: "水鉄砲の壺",
      buy: 2000,
      sell: 800,
      unique: false,
      min: 3,
      max: 5,
    },
    {
      name: "魔物の壺",
      buy: 2000,
      sell: 800,
      unique: false,
      min: 3,
      max: 5,
    },
    {
      name: "ビックリの壺",
      buy: 2000,
      sell: 800,
      unique: true,
      min: 3,
      max: 5,
    },
    {
      name: "笑いの壺",
      buy: 2000,
      sell: 800,
      unique: false,
      min: 2,
      max: 3,
    },
    {
      name: "合成の壺",
      buy: 6000,
      sell: 2400,
      unique: false,
      min: 3,
      max: 4,
    },
    {
      name: "強化の壺",
      buy: 10000,
      sell: 4000,
      unique: false,
      min: 2,
      max: 3,
    },
    {
      name: "弱化の壺",
      buy: 10000,
      sell: 4000,
      unique: false,
      min: 2,
      max: 3,
    },
  ],
};

/**
 * 上の壺名と本体価格から使用回数ごとの全壺リストを生成
 */
const _fullList: ReadonlyArray<MasterItem> = list.list
  .map((item) => {
    return range(item.min, item.max + 1).map((index) => {
      return {
        name: `${item.name}[${index}]`,
        buy: item.buy + index * 100,
        sell: item.sell + index * 40,
        itemType: "Tsubo" as const,
        possibleStates: itemTypePossibleStatesMap["Tsubo"],
        unique: item.unique,
      };
    });
  })
  .flat();

export const fullList = {
  list: _fullList,
};
