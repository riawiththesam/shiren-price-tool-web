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

  it("useItemListのpurchaseTypeをbuyに設定", () => {
    const expectedFilter: ItemFilter = {
      purchaseType: "buy",
      showItemType: "All",
      enableUnique: false,
    };
    const { result } = renderHook(() => useItemList());
    act(() => {
      result.current.setPurchaseType("buy");
    });

    expect(result.current.itemListState.filter).toEqual(expectedFilter);
  });

  it("useItemListのpurchaseTypeをsellに設定", () => {
    const expectedFilter: ItemFilter = {
      purchaseType: "sell",
      showItemType: "All",
      enableUnique: false,
    };
    const { result } = renderHook(() => useItemList());
    act(() => {
      result.current.setPurchaseType("sell");
    });

    expect(result.current.itemListState.filter).toEqual(expectedFilter);
  });

  it("useItemListのpurchaseTypeをallに設定", () => {
    const expectedFilter: ItemFilter = {
      purchaseType: "all",
      showItemType: "All",
      enableUnique: false,
    };
    const { result } = renderHook(() => useItemList());
    act(() => {
      result.current.setPurchaseType("sell");
      result.current.setPurchaseType("all");
    });

    expect(result.current.itemListState.filter).toEqual(expectedFilter);
  });
});
