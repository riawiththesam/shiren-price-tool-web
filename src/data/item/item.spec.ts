import { Item, MasterItem } from "../../types/Item";
import { mapToNormal, mapToNoroi, mapToShukufuku } from "./item";

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

  it("mapToShukufukuがアイテムマスタの情報から祝福されたアイテム情報を生成", async () => {
    const masterItem: MasterItem = {
      name: "TestItem",
      shortName: "TI",
      buy: 1000,
      sell: 400,
      itemType: "Kusa",
      unique: false,
      possibleStates: ["Normal", "Shukufuku"],
    };
    const expectedItem: Item = {
      name: masterItem.name,
      shortName: "TI",
      defaultBuy: 1000,
      defaultSell: 400,
      buy: 2000,
      sell: 800,
      state: "Shukufuku",
      master: masterItem,
    };
    const shukufukuItem = mapToShukufuku(masterItem);

    expect(shukufukuItem).toEqual(expectedItem);
  });

  it("mapToNormalがアイテムマスタの情報から呪い、祝福でない通常のアイテム情報を生成", async () => {
    const masterItem: MasterItem = {
      name: "TestItem",
      shortName: "TI",
      buy: 1000,
      sell: 400,
      itemType: "Kusa",
      unique: false,
      possibleStates: ["Normal", "Shukufuku"],
    };
    const expectedItem: Item = {
      name: masterItem.name,
      shortName: "TI",
      defaultBuy: 1000,
      defaultSell: 400,
      buy: 1000,
      sell: 400,
      state: "Normal",
      master: masterItem,
    };
    const shukufukuItem = mapToNormal(masterItem);

    expect(shukufukuItem).toEqual(expectedItem);
  });
});
