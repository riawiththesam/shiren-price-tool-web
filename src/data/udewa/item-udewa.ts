import { MasterItem, itemTypePossibleStatesMap } from "../../types/Item";

const _list = {
  list: [
    {
      name: "回復の腕輪",
      buy: 5000,
      sell: 2000,
      unique: false,
    },
    {
      name: "ちからの腕輪",
      buy: 2000,
      sell: 800,
      unique: false,
    },
    {
      name: "胃拡張の腕輪",
      shortName: "胃拡",
      buy: 3500,
      sell: 1400,
      unique: false,
    },
    {
      name: "胃縮小の腕輪",
      shortName: "胃縮",
      buy: 3500,
      sell: 1400,
      unique: false,
    },
    {
      name: "しあわせの腕輪",
      buy: 4000,
      sell: 1600,
      unique: false,
    },
    {
      name: "毒消しの腕輪",
      buy: 6500,
      sell: 2600,
      unique: false,
    },
    {
      name: "混乱よけの腕輪",
      buy: 4000,
      sell: 1600,
      unique: false,
    },
    {
      name: "睡眠よけの腕輪",
      buy: 2500,
      sell: 1000,
      unique: false,
    },
    {
      name: "錆よけの腕輪",
      buy: 5000,
      sell: 2000,
      unique: false,
    },
    {
      name: "呪いよけの腕輪",
      buy: 3000,
      sell: 1200,
      unique: false,
    },
    {
      name: "弾きよけの腕輪",
      buy: 3500,
      sell: 1400,
      unique: false,
    },
    {
      name: "遠投の腕輪",
      buy: 1500,
      sell: 600,
      unique: false,
    },
    {
      name: "ヘタ投げの腕輪",
      buy: 1500,
      sell: 600,
      unique: false,
    },
    {
      name: "百発百中の腕輪",
      buy: 15000,
      sell: 6000,
      unique: false,
    },
    {
      name: "ボヨヨンの腕輪",
      buy: 1500,
      sell: 600,
      unique: false,
    },
    {
      name: "連射の腕輪",
      buy: 1500,
      sell: 600,
      unique: false,
    },
    {
      name: "諸刃の腕輪",
      buy: 1500,
      sell: 600,
      unique: false,
    },
    {
      name: "痛恨の腕輪",
      buy: 1500,
      sell: 600,
      unique: false,
    },
    {
      name: "高飛びの腕輪",
      buy: 1500,
      sell: 600,
      unique: false,
    },
    {
      name: "爆発の腕輪",
      buy: 1500,
      sell: 600,
      unique: false,
    },
    {
      name: "透視の腕輪",
      buy: 5000,
      sell: 2000,
      unique: false,
    },
    {
      name: "気配察知の腕輪",
      buy: 2500,
      sell: 1000,
      unique: false,
    },
    {
      name: "道具感知の腕輪",
      buy: 2500,
      sell: 1000,
      unique: false,
    },
    {
      name: "裏道の腕輪",
      buy: 5000,
      sell: 2000,
      unique: false,
    },
    {
      name: "水グモの腕輪",
      buy: 3000,
      sell: 1200,
      unique: false,
    },
    {
      name: "浮遊の腕輪",
      buy: 3000,
      sell: 1200,
      unique: false,
    },
    {
      name: "壁抜けの腕輪",
      buy: 6500,
      sell: 2600,
      unique: false,
    },
    {
      name: "忍び足の腕輪",
      buy: 6500,
      sell: 2600,
      unique: false,
    },
    {
      name: "すれちがいの腕輪",
      buy: 5000,
      sell: 2000,
      unique: false,
    },
    {
      name: "垂れ流しの腕輪",
      buy: 1500,
      sell: 600,
      unique: false,
    },
    {
      name: "金垂れ流しの腕輪",
      buy: 1500,
      sell: 600,
      unique: false,
    },
    {
      name: "魔物呼びの腕輪",
      buy: 3000,
      sell: 1200,
      unique: false,
    },
    {
      name: "罠増しの腕輪",
      shortName: "罠増",
      buy: 1500,
      sell: 600,
      unique: false,
    },
    {
      name: "値切りの腕輪",
      buy: 3500,
      sell: 1400,
      unique: false,
    },
    {
      name: "罠師の腕輪",
      shortName: "罠師",
      buy: 7500,
      sell: 3000,
      unique: false,
    },
    {
      name: "鑑定士の腕輪",
      buy: 7500,
      sell: 3000,
      unique: false,
    },
    {
      name: "大砲強化の腕輪",
      buy: 2500,
      sell: 1000,
      unique: false,
    },
  ],
};

const _fullList: Array<MasterItem> = _list.list.map((item) => {
  return {
    ...item,
    itemType: "Udewa",
    possibleStates: itemTypePossibleStatesMap["Udewa"],
  };
});

export const fullList = {
  list: _fullList,
};
