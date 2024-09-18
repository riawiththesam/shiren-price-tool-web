/**
 * @jest-environment jsdom
 */

import { act, renderHook } from "@testing-library/react";
import { MainUIState, useMainUI } from "./use-main-ui";

describe("use-main-ui", () => {
  it("useMainUIの初期状態", () => {
    const expected: MainUIState = {
      featureUIState: "ItemList",
      drawerOpened: false,
    };
    const { result } = renderHook(() => useMainUI());

    expect(result.current.mainUIState).toEqual(expected);
  });

  it("useMainUIのドロワーを表示", () => {
    const { result } = renderHook(() => useMainUI());
    act(() => {
      result.current.toggleDrawer();
    });
    expect(result.current.mainUIState).toEqual({
      featureUIState: "ItemList",
      drawerOpened: true,
    });
    act(() => {
      result.current.toggleDrawer();
    });
    expect(result.current.mainUIState).toEqual({
      featureUIState: "ItemList",
      drawerOpened: false,
    });
  });
});
