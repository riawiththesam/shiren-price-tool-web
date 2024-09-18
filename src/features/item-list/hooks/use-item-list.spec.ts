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

  it("useItemListのuniqueを設定", () => {
    const expectedFilter: ItemFilter = {
      purchaseType: "all",
      showItemType: "All",
      enableUnique: true,
    };
    const { result } = renderHook(() => useItemList());
    act(() => {
      result.current.setEnableUnique(true);
    });

    expect(result.current.itemListState.filter).toEqual(expectedFilter);
  });

  it("useItemListのuniqueを解除", () => {
    const expectedFilter: ItemFilter = {
      purchaseType: "all",
      showItemType: "All",
      enableUnique: false,
    };
    const { result } = renderHook(() => useItemList());
    act(() => {
      result.current.setEnableUnique(true);
      result.current.setEnableUnique(false);
    });

    expect(result.current.itemListState.filter).toEqual(expectedFilter);
  });

  it("useItemListのitemTypeを草に設定", () => {
    const expectedFilter: ItemFilter = {
      purchaseType: "all",
      showItemType: "Kusa",
      enableUnique: false,
    };
    const { result } = renderHook(() => useItemList());
    act(() => {
      result.current.setItemType("Kusa");
    });

    expect(result.current.itemListState.filter).toEqual(expectedFilter);
  });

  it("useItemListのitemTypeを巻物に設定", () => {
    const expectedFilter: ItemFilter = {
      purchaseType: "all",
      showItemType: "Makimono",
      enableUnique: false,
    };
    const { result } = renderHook(() => useItemList());
    act(() => {
      result.current.setItemType("Makimono");
    });

    expect(result.current.itemListState.filter).toEqual(expectedFilter);
  });

  it("useItemListのitemTypeを壺に設定", () => {
    const expectedFilter: ItemFilter = {
      purchaseType: "all",
      showItemType: "Tsubo",
      enableUnique: false,
    };
    const { result } = renderHook(() => useItemList());
    act(() => {
      result.current.setItemType("Tsubo");
    });

    expect(result.current.itemListState.filter).toEqual(expectedFilter);
  });

  it("useItemListのitemTypeを杖に設定", () => {
    const expectedFilter: ItemFilter = {
      purchaseType: "all",
      showItemType: "Tsue",
      enableUnique: false,
    };
    const { result } = renderHook(() => useItemList());
    act(() => {
      result.current.setItemType("Tsue");
    });

    expect(result.current.itemListState.filter).toEqual(expectedFilter);
  });

  it("useItemListのitemTypeを腕輪に設定", () => {
    const expectedFilter: ItemFilter = {
      purchaseType: "all",
      showItemType: "Udewa",
      enableUnique: false,
    };
    const { result } = renderHook(() => useItemList());
    act(() => {
      result.current.setItemType("Udewa");
    });

    expect(result.current.itemListState.filter).toEqual(expectedFilter);
  });

  it("useItemListのitemTypeをAllに戻す", () => {
    const expectedFilter: ItemFilter = {
      purchaseType: "all",
      showItemType: "All",
      enableUnique: false,
    };
    const { result } = renderHook(() => useItemList());
    act(() => {
      result.current.setItemType("Udewa");
      result.current.setItemType("All");
    });

    expect(result.current.itemListState.filter).toEqual(expectedFilter);
  });
});
