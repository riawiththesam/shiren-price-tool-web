import range from "just-range";

export const list = {
  list: [
    {
      name: "保存の壺",
      buy: 800,
      sell: 320,
      unique: false,
    },
    {
      name: "識別の壺",
      buy: 800,
      sell: 320,
      unique: false,
    },
    {
      name: "変化の壺",
      buy: 800,
      sell: 320,
      unique: false,
    },
    {
      name: "ただの壺",
      buy: 800,
      sell: 320,
      unique: false,
    },
    {
      name: "やりすごしの壺",
      buy: 800,
      sell: 320,
      unique: false,
    },
    {
      name: "換金の壺",
      buy: 1000,
      sell: 400,
      unique: false,
    },
    {
      name: "手封じの壺",
      buy: 1000,
      sell: 400,
      unique: false,
    },
    {
      name: "割れない壺",
      buy: 1000,
      sell: 400,
      unique: false,
    },
    {
      name: "倉庫の壺",
      buy: 1000,
      sell: 400,
      unique: false,
    },
    {
      name: "底抜けの壺",
      buy: 1000,
      sell: 400,
      unique: false,
    },
    {
      name: "おはらいの壺",
      shortName: "祓",
      buy: 1600,
      sell: 640,
      unique: false,
    },
    {
      name: "呪いの壺",
      buy: 1600,
      sell: 640,
      unique: false,
    },
    {
      name: "背中の壺",
      buy: 2000,
      sell: 800,
      unique: false,
    },
    {
      name: "トドの壺",
      buy: 2000,
      sell: 800,
      unique: false,
    },
    {
      name: "水鉄砲の壺",
      buy: 2000,
      sell: 800,
      unique: false,
    },
    {
      name: "魔物の壺",
      buy: 2000,
      sell: 800,
      unique: false,
    },
    {
      name: "ビックリの壺",
      buy: 2000,
      sell: 800,
      unique: true,
    },
    {
      name: "笑いの壺",
      buy: 2000,
      sell: 800,
      unique: false,
    },
    {
      name: "合成の壺",
      buy: 6000,
      sell: 2400,
      unique: false,
    },
    {
      name: "強化の壺",
      buy: 10000,
      sell: 4000,
      unique: false,
    },
    {
      name: "弱化の壺",
      buy: 10000,
      sell: 4000,
      unique: false,
    },
  ],
};

/**
 * 上の壺名と本体価格から使用回数ごとの全壺リストを生成
 */
const _fullList = list.list
  .map((item) => {
    return range(0, 6).map((index) => {
      return {
        name: `${item.name}[${index}]`,
        buy: item.buy + index * 100,
        sell: item.sell + index * 40,
      };
    });
  })
  .flat();

export const fullList = {
  list: _fullList,
};
