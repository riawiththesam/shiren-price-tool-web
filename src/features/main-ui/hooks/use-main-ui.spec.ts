/**
 * @jest-environment jsdom
 */

import { renderHook } from "@testing-library/react";
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
});
