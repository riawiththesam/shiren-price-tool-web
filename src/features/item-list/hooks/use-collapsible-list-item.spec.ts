/**
 * @jest-environment jsdom
 */

import { renderHook, act } from "@testing-library/react";
import {
  CollapsibleListItemState,
  useCollapsibleListItem,
} from "./use-collapsible-list-item";
import { ItemGroup } from "./use-item-list";
import { Item } from "../../../types/Item";

describe("use-collapsible-list-item", () => {
  it("useCollapsibleListItemの初期状態", () => {
    const itemGroup: ItemGroup = {
      value: "1000",
      itemList: [],
    };
    const expected: CollapsibleListItemState = {
      isOpened: false,
      item: null,
      tableOpened: false,
    };
    const { result } = renderHook(() => useCollapsibleListItem(itemGroup));

    expect(result.current.state).toEqual(expected);
  });

  it("useCollapsibleListItemで表を表示状態にする", () => {
    const itemGroup: ItemGroup = {
      value: "1000",
      itemList: [],
    };
    const expected: CollapsibleListItemState = {
      isOpened: false,
      item: null,
      tableOpened: true,
    };
    const { result } = renderHook(() => useCollapsibleListItem(itemGroup));
    act(() => {
      result.current.setTableOpened(true);
    });

    expect(result.current.state).toEqual(expected);
  });

  it("useCollapsibleListItemで表を非表示状態にする", () => {
    const itemGroup: ItemGroup = {
      value: "1000",
      itemList: [],
    };
    const expected: CollapsibleListItemState = {
      isOpened: false,
      item: null,
      tableOpened: false,
    };
    const { result } = renderHook(() => useCollapsibleListItem(itemGroup));
    act(() => {
      result.current.setTableOpened(true);
      result.current.setTableOpened(false);
    });

    expect(result.current.state).toEqual(expected);
  });

  it("useCollapsibleListItemでダイアログを表示状態にする", () => {
    const itemGroup: ItemGroup = {
      value: "1000",
      itemList: [],
    };
    const item: Item = {
      name: "testitem",
      shortName: "ti",
      defaultBuy: 1000,
      defaultSell: 400,
      buy: 1000,
      sell: 400,
      state: "Normal",
      master: {
        name: "testitem",
        buy: 1000,
        sell: 400,
        itemType: "Makimono",
        unique: false,
        possibleStates: ["Normal"],
      },
    };
    const expected: CollapsibleListItemState = {
      isOpened: true,
      item: item,
      tableOpened: false,
    };
    const { result } = renderHook(() => useCollapsibleListItem(itemGroup));
    act(() => {
      result.current.setOpened(item);
    });

    expect(result.current.state).toEqual(expected);
  });

  it("useCollapsibleListItemでダイアログを非表示状態にする", () => {
    const itemGroup: ItemGroup = {
      value: "1000",
      itemList: [],
    };
    const item: Item = {
      name: "testitem",
      shortName: "ti",
      defaultBuy: 1000,
      defaultSell: 400,
      buy: 1000,
      sell: 400,
      state: "Normal",
      master: {
        name: "testitem",
        buy: 1000,
        sell: 400,
        itemType: "Makimono",
        unique: false,
        possibleStates: ["Normal"],
      },
    };
    const expected: CollapsibleListItemState = {
      isOpened: false,
      item: null,
      tableOpened: false,
    };
    const { result } = renderHook(() => useCollapsibleListItem(itemGroup));
    act(() => {
      result.current.setOpened(item);
      result.current.close();
    });

    expect(result.current.state).toEqual(expected);
  });
});
