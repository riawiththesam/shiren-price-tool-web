import { Item, MasterItem } from "../../types/Item";
import { mapToNoroi } from "./item";

describe("item.ts", () => {
  it("mapToNoroiがアイテムマスタの情報から呪われたアイテム情報を生成", async () => {
    const masterItem: MasterItem = {
      name: "TestItem",
      shortName: "TI",
      buy: 1000,
      sell: 400,
      itemType: "Kusa",
      unique: false,
      possibleStates: ["Normal", "Noroi"],
    };
    const expectedItem: Item = {
      name: masterItem.name,
      shortName: "TI",
      defaultBuy: 1000,
      defaultSell: 400,
      buy: 870,
      sell: 348,
      state: "Noroi",
      master: masterItem,
    };
    const noroiItem = mapToNoroi(masterItem);

    expect(noroiItem).toEqual(expectedItem);
  });
});
