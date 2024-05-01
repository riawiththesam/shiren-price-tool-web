import { Item } from "../../../types/Item";
import { useImmer } from "use-immer";

export interface ListItemDialogState {
  isOpened: boolean;
  item: Item | null;
}

export function useCollapsibleListItem() {
  const [dialogState, setDialogState] = useImmer<ListItemDialogState>({
    isOpened: false,
    item: null,
  });

  return {
    dialogState,
    setOpened: (item: Item) => {
      setDialogState((draft) => {
        draft.item = item;
        draft.isOpened = true;
      });
    },
    close: () => {
      setDialogState((draft) => {
        draft.item = null;
        draft.isOpened = false;
      });
    },
  };
}
