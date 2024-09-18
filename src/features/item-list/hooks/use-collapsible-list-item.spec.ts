/**
 * @jest-environment jsdom
 */

import { renderHook } from "@testing-library/react";
import {
  CollapsibleListItemState,
  useCollapsibleListItem,
} from "./use-collapsible-list-item";
import { ItemGroup } from "./use-item-list";

describe("use-collapsible-list-item", () => {
  it("useCollapsibleListItemの初期状態", () => {
    const itemGroup: ItemGroup = {
      value: "1000",
      itemList: [
        {
          name: "item1",
          shortName: "i1",
          defaultBuy: 1000,
          defaultSell: 100,
          buy: 1000,
          sell: 400,
          state: "Normal",
          master: {
            name: "item1",
            buy: 1000,
            sell: 100,
            itemType: "Makimono",
            unique: false,
            possibleStates: ["Normal"],
          },
        },
        {
          name: "item2",
          shortName: "i2",
          defaultBuy: 1000,
          defaultSell: 100,
          buy: 1000,
          sell: 400,
          state: "Normal",
          master: {
            name: "item1",
            buy: 1000,
            sell: 100,
            itemType: "Makimono",
            unique: false,
            possibleStates: ["Normal"],
          },
        },
      ],
    };
    const expected: CollapsibleListItemState = {
      isOpened: false,
      item: null,
      tableOpened: false,
    };
    const { result } = renderHook(() => useCollapsibleListItem(itemGroup));

    expect(result.current.state).toEqual(expected);
  });
});
