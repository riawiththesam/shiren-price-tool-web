import { Item } from "../../../types/Item";
import { useImmer } from "use-immer";
import { ItemGroup } from "./use-item-list";
import { useEffect } from "react";

export interface CollapsibleListItemState {
  isOpened: boolean;
  item: Item | null;
  tableOpened: boolean;
}

export function useCollapsibleListItem(itemGroup: ItemGroup) {
  const [state, setState] = useImmer<CollapsibleListItemState>({
    isOpened: false,
    item: null,
    tableOpened: false,
  });
  useEffect(() => {
    setState((draft) => {
      draft.tableOpened = false;
    });
  }, [itemGroup, setState]);

  return {
    state,
    setOpened: (item: Item) => {
      setState((draft) => {
        draft.item = item;
        draft.isOpened = true;
      });
    },
    close: () => {
      setState((draft) => {
        draft.item = null;
        draft.isOpened = false;
      });
    },
    setTableOpened: (opened: boolean) => {
      setState((draft) => {
        draft.tableOpened = opened;
      });
    },
  };
}
