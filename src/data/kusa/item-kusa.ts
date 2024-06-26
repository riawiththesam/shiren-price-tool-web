import { MasterItem, itemTypePossibleStatesMap } from "../../types/Item";

const _list = {
  list: [
    {
      name: "雑草",
      buy: 10,
      sell: 4,
      unique: true,
      note: "モンスターの能力や、復活の草の効果により識別済みで入手",
    },
    {
      name: "薬草",
      buy: 40,
      sell: 10,
      unique: false,
    },
    {
      name: "弟切草",
      buy: 80,
      sell: 30,
      unique: false,
    },
    {
      name: "いやし草",
      buy: 200,
      sell: 80,
      unique: false,
    },
    {
      name: "命の草",
      buy: 500,
      sell: 200,
      unique: false,
    },
    {
      name: "かぐわし草",
      buy: 200,
      sell: 80,
      unique: false,
    },
    {
      name: "復活の草",
      buy: 400,
      sell: 160,
      unique: false,
    },
    {
      name: "胃拡張の種",
      shortName: "胃拡",
      buy: 200,
      sell: 80,
      unique: false,
    },
    {
      name: "胃縮小の種",
      shortName: "胃縮",
      buy: 200,
      sell: 80,
      unique: false,
    },
    {
      name: "ドラゴン草",
      buy: 250,
      sell: 100,
      unique: false,
    },
    {
      name: "高飛び草",
      buy: 100,
      sell: 40,
      unique: false,
    },
    {
      name: "毒消し草",
      shortName: "毒消",
      buy: 600,
      sell: 240,
      unique: false,
    },
    {
      name: "ちからの草",
      buy: 700,
      sell: 280,
      unique: false,
    },
    {
      name: "毒草",
      shortName: "毒草",
      buy: 50,
      sell: 20,
      unique: false,
    },
    {
      name: "混乱草",
      buy: 70,
      sell: 25,
      unique: false,
    },
    {
      name: "睡眠草",
      buy: 70,
      sell: 25,
      unique: false,
    },
    {
      name: "暴走の種",
      buy: 50,
      sell: 20,
      unique: false,
    },
    {
      name: "目つぶし草",
      shortName: "目潰",
      buy: 70,
      sell: 25,
      unique: false,
    },
    {
      name: "めぐすり草",
      shortName: "目薬",
      buy: 70,
      sell: 25,
      unique: false,
    },
    {
      name: "すばやさ草",
      buy: 70,
      sell: 25,
      unique: false,
    },
    {
      name: "パワーアップ草",
      buy: 70,
      sell: 25,
      unique: false,
    },
    {
      name: "無敵草",
      buy: 400,
      sell: 160,
      unique: false,
    },
    {
      name: "しあわせ草",
      buy: 1000,
      sell: 400,
      unique: false,
    },
    {
      name: "天使の種",
      buy: 2000,
      sell: 800,
      unique: false,
    },
    {
      name: "くねくね草",
      buy: 100,
      sell: 40,
      unique: false,
    },
    {
      name: "不幸の種",
      buy: 400,
      sell: 160,
      unique: false,
    },
    {
      name: "超不幸の種",
      buy: 2000,
      sell: 800,
      unique: false,
    },
  ],
};

const _fullList: Array<MasterItem> = _list.list.map((item) => {
  return {
    ...item,
    itemType: "Kusa",
    possibleStates: itemTypePossibleStatesMap["Kusa"],
  };
});

export const fullList = {
  list: _fullList,
};
