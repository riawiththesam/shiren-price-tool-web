import { MasterItem, itemTypePossibleStatesMap } from "../../types/Item";

const _list = {
  list: [
    {
      name: "混乱の巻物",
      buy: 300,
      sell: 120,
      unique: false,
    },
    {
      name: "バクスイの巻物",
      buy: 300,
      sell: 120,
      unique: false,
    },
    {
      name: "ゾワゾワの巻物",
      buy: 300,
      sell: 120,
      unique: false,
    },
    {
      name: "真空斬りの巻物",
      buy: 300,
      sell: 120,
      unique: false,
    },
    {
      name: "全滅の巻物",
      buy: 3000,
      sell: 1200,
      unique: false,
    },
    {
      name: "おはらいの巻物",
      shortName: "祓",
      buy: 600,
      sell: 240,
      unique: false,
    },
    {
      name: "識別の巻物",
      buy: 300,
      sell: 120,
      unique: false,
    },
    {
      name: "天の恵みの巻物",
      buy: 400,
      sell: 160,
      unique: false,
    },
    {
      name: "地の恵みの巻物",
      buy: 400,
      sell: 160,
      unique: false,
    },
    {
      name: "メッキの巻物",
      buy: 400,
      sell: 160,
      unique: false,
    },
    {
      name: "印増大の巻物",
      shortName: "印増",
      buy: 400,
      sell: 160,
      unique: false,
    },
    {
      name: "印消しの巻物",
      shortName: "印消",
      buy: 400,
      sell: 160,
      unique: false,
    },
    {
      name: "銀封印の巻物",
      shortName: "銀封",
      buy: 300,
      sell: 120,
      unique: false,
    },
    {
      name: "銀はがしの巻物",
      shortName: "銀剥",
      buy: 1000,
      sell: 400,
      unique: false,
    },
    {
      name: "壺増大の巻物",
      buy: 1000,
      sell: 400,
      unique: false,
    },
    {
      name: "吸い出しの巻物",
      buy: 1000,
      sell: 400,
      unique: false,
    },
    {
      name: "おにぎりの巻物",
      shortName: "握",
      buy: 400,
      sell: 160,
      unique: false,
    },
    {
      name: "呪いの巻物",
      buy: 1000,
      sell: 400,
      unique: false,
    },
    {
      name: "あかりの巻物",
      buy: 600,
      sell: 240,
      unique: false,
    },
    {
      name: "迷子の巻物",
      buy: 600,
      sell: 240,
      unique: false,
    },
    {
      name: "罠消しの巻物",
      shortName: "罠消",
      buy: 600,
      sell: 240,
      unique: false,
    },
    {
      name: "罠の巻物",
      shortName: "罠の",
      buy: 1000,
      sell: 400,
      unique: false,
    },
    {
      name: "水がれの巻物",
      buy: 1000,
      sell: 400,
      unique: false,
    },
    {
      name: "魔物部屋の巻物",
      buy: 1000,
      sell: 400,
      unique: false,
    },
    {
      name: "大部屋の巻物",
      buy: 1000,
      sell: 400,
      unique: false,
    },
    {
      name: "生物集合の巻物",
      buy: 300,
      sell: 120,
      unique: false,
    },
    {
      name: "道具寄せの巻物",
      buy: 300,
      sell: 120,
      unique: false,
    },
    {
      name: "バクチの巻物",
      buy: 1000,
      sell: 400,
      unique: false,
    },
    {
      name: "くちなしの巻物",
      buy: 1000,
      sell: 400,
      unique: false,
    },
    {
      name: "拾えずの巻物",
      buy: 1000,
      sell: 400,
      unique: false,
    },
    {
      name: "敵加速の巻物",
      buy: 1000,
      sell: 400,
      unique: false,
    },
    {
      name: "困った時の巻物",
      buy: 300,
      sell: 120,
      unique: false,
    },
    {
      name: "脱出の巻物",
      buy: 1000,
      sell: 400,
      unique: true,
    },
    {
      name: "ねだやしの巻物",
      buy: 10000,
      sell: 4000,
      unique: false,
    },
    {
      name: "聖域の巻物",
      buy: 1000,
      sell: 400,
      unique: false,
    },
    {
      name: "白紙の巻物",
      buy: 1000,
      sell: 400,
      unique: true,
    },
    {
      name: "ぬれた巻物",
      buy: 200,
      sell: 80,
      unique: true,
    },
  ],
};

const _fullList: Array<MasterItem> = _list.list.map((item) => {
  return {
    ...item,
    itemType: "Makimono",
    possibleStates: itemTypePossibleStatesMap["Makimono"],
  };
});

export const fullList = {
  list: _fullList,
};
