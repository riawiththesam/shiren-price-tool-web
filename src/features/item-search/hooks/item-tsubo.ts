import range from "just-range";

export const list = {
  list: [
    {
      name: "保存の壺",
      buy: 800,
    },
    {
      name: "識別の壺",
      buy: 800,
    },
    {
      name: "変化の壺",
      buy: 800,
    },
    {
      name: "ただの壺",
      buy: 800,
    },
    {
      name: "やりすごしの壺",
      buy: 800,
    },
    {
      name: "換金の壺",
      buy: 1000,
    },
    {
      name: "手封じの壺",
      buy: 1000,
    },
    {
      name: "割れない壺",
      buy: 1000,
    },
    {
      name: "倉庫の壺",
      buy: 1000,
    },
    {
      name: "底抜けの壺",
      buy: 1000,
    },
    {
      name: "おはらいの壺",
      buy: 1600,
    },
    {
      name: "呪いの壺",
      buy: 1600,
    },
    {
      name: "背中の壺",
      buy: 2000,
    },
    {
      name: "トドの壺",
      buy: 2000,
    },
    {
      name: "水鉄砲の壺",
      buy: 2000,
    },
    {
      name: "魔物の壺",
      buy: 2000,
    },
    {
      name: "ビックリの壺",
      buy: 2000,
    },
    {
      name: "笑いの壺",
      buy: 2000,
    },
    {
      name: "合成の壺",
      buy: 6000,
    },
    {
      name: "強化の壺",
      buy: 10000,
    },
    {
      name: "弱化の壺",
      buy: 10000,
    },
  ],
};

/**
 * 上の壺名と本体価格から使用回数ごとの全壺リストを生成
 */
const _fullList = list.list
  .map((item) => {
    return range(0, 6).map((index) => {
      return { name: `${item.name}[${index}]`, buy: item.buy + index * 100 };
    });
  })
  .flat();

export const fullList = {
  list: _fullList,
};
