import range from "just-range";

export const list = {
  list: [
    {
      name: "ただの杖",
      buy: 500,
      sell: 200,
    },
    {
      name: "吹き飛ばしの杖",
      buy: 500,
      sell: 200,
    },
    {
      name: "場所がえの杖",
      buy: 500,
      sell: 200,
    },
    {
      name: "飛びつきの杖",
      buy: 500,
      sell: 200,
    },
    {
      name: "転ばぬ先の杖",
      buy: 500,
      sell: 200,
    },
    {
      name: "かなしばりの杖",
      buy: 500,
      sell: 200,
    },
    {
      name: "封印の杖",
      buy: 500,
      sell: 200,
    },
    {
      name: "感電の杖",
      buy: 500,
      sell: 200,
    },
    {
      name: "トンネルの杖",
      buy: 700,
      sell: 280,
    },
    {
      name: "土塊の杖",
      buy: 700,
      sell: 280,
    },
    {
      name: "鈍足の杖",
      buy: 700,
      sell: 280,
    },
    {
      name: "加速の杖",
      buy: 700,
      sell: 280,
    },
    {
      name: "導きの杖",
      buy: 700,
      sell: 280,
    },
    {
      name: "痛み分けの杖",
      buy: 1000,
      sell: 400,
    },
    {
      name: "ガイコツまどうの杖",
      buy: 1000,
      sell: 400,
    },
    {
      name: "一時しのぎの杖",
      buy: 1000,
      sell: 400,
    },
    {
      name: "幸せの杖",
      buy: 1000,
      sell: 400,
    },
    {
      name: "不幸の杖",
      buy: 1000,
      sell: 400,
    },
    {
      name: "身代わりの杖",
      buy: 2000,
      sell: 800,
    },
    {
      name: "桃まんの杖",
      buy: 2000,
      sell: 800,
    },
  ],
};

/**
 * 上の杖名と本体価格から使用回数ごとの全杖リストを生成
 */
const _fullList = list.list
  .map((item) => {
    return range(0, 7).map((index) => {
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
