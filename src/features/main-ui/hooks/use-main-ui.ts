import { atom, useAtom } from "jotai";

export const featureUIStateList = ["ItemSearch", "ItemList"] as const;
export type FeatureUIStateType = (typeof featureUIStateList)[number];

interface MainUIState {
  featureUIState: FeatureUIStateType;
  drawerOpened: boolean;
}

const mainUIAtom = atom<MainUIState>({
  featureUIState: "ItemSearch",
  drawerOpened: false,
});

export function useMainUI() {
  const [mainUIState, setMainUIState] = useAtom(mainUIAtom);

  function setItemSearch() {
    setMainUIState({
      ...mainUIState,
      featureUIState: "ItemSearch",
      drawerOpened: false,
    });
  }

  function setItemList() {
    setMainUIState({
      ...mainUIState,
      featureUIState: "ItemList",
      drawerOpened: false,
    });
  }

  function toggleDrawer() {
    setMainUIState({
      ...mainUIState,
      drawerOpened: !mainUIState.drawerOpened,
    });
  }

  return {
    mainUIState,
    setItemSearch,
    setItemList,
    toggleDrawer,
  };
}