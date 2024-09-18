/**
 * @jest-environment jsdom
 */

import { renderHook, act } from "@testing-library/react";
import { ItemFilter, useItemList } from "./use-item-list";

describe("use-item-list", () => {
  it("useItemListの初期状態", () => {
    const expectedFilter: ItemFilter = {
      purchaseType: "all",
      showItemType: "All",
      enableUnique: false,
    };
    const { result } = renderHook(() => useItemList());

    expect(result.current.itemListState.filter).toEqual(expectedFilter);
  });
});
