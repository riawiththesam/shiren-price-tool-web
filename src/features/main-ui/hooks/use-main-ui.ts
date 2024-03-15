import { atom, useAtom } from "jotai";

export const mainUIStateList = ["ItemSearch", "ItemList"] as const;
export type MainUIStateType = (typeof mainUIStateList)[number];

const mainUIAtom = atom<MainUIStateType>("ItemSearch");

export function useMainUI() {
  const [mainUIState, setMainUIState] = useAtom(mainUIAtom);

  function setItemSearch() {
    setMainUIState("ItemSearch");
  }

  function setItemList() {
    setMainUIState("ItemList");
  }

  return {
    mainUIState,
    setItemSearch,
    setItemList,
  };
}
