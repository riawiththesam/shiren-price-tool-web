import { findKusaList } from "./kusa";

describe("kusa", () => {
  it("findKusaListが草アイテムのリストを返す", () => {
    const kusaList = findKusaList(100, "buy");

    // 毒草、暴走の草、高とび草、くねくね草の4種
    expect(kusaList.length).toEqual(4);
    expect(kusaList.find((item) => item.name == "毒草")).not.toBeNull();
    expect(kusaList.find((item) => item.name == "暴走の草")).not.toBeNull();
    expect(kusaList.find((item) => item.name == "高とび草")).not.toBeNull();
    expect(kusaList.find((item) => item.name == "くねくね草")).not.toBeNull();
  });

  it("findKusaListが草アイテムのリストを返す", () => {
    const kusaList = findKusaList(70, "buy");

    // 混乱草、睡眠草、目潰し草、めぐすり草、すばやさ草、パワーアップ草の6種
    expect(kusaList.length).toEqual(6);
    expect(kusaList.find((item) => item.name == "混乱草")).not.toBeNull();
    expect(kusaList.find((item) => item.name == "睡眠草")).not.toBeNull();
    expect(kusaList.find((item) => item.name == "目潰し草")).not.toBeNull();
    expect(kusaList.find((item) => item.name == "めぐすり草")).not.toBeNull();
    expect(kusaList.find((item) => item.name == "すばやさ草")).not.toBeNull();
    expect(
      kusaList.find((item) => item.name == "パワーアップ草")
    ).not.toBeNull();
  });

  it("findKusaListが草アイテムのリストを返す", () => {
    const kusaList = findKusaList(139, "sell");

    // 復活草、無敵草、不幸の種の3種
    expect(kusaList.length).toEqual(3);
    expect(kusaList.find((item) => item.name == "復活草")).not.toBeNull();
    expect(kusaList.find((item) => item.name == "無敵草")).not.toBeNull();
    expect(kusaList.find((item) => item.name == "不幸の種")).not.toBeNull();
  });
});
