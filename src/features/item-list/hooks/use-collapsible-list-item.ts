import { Item } from "../../../types/Item";
import { useImmer } from "use-immer";
import { ItemGroup } from "./use-item-list";
import { useEffect } from "react";

export interface CollapsibleListItemState {
  isOpened: boolean;
  item: Item | null;
  tableOpened: boolean;
}

/**
 * CollapsibleListItemのステート管理
 * 表の表示状態、ダイアログの内容、表示状態
 *
 * @param itemGroup
 * @returns
 */
export function useCollapsibleListItem(itemGroup: ItemGroup) {
  const [state, setState] = useImmer<CollapsibleListItemState>({
    isOpened: false,
    item: null,
    tableOpened: false,
  });
  // itemGroupが更新されたら表を閉じる
  // itemGroupを受け取るよりきれいなやり方がありそう
  useEffect(() => {
    setState((draft) => {
      draft.tableOpened = false;
    });
  }, [itemGroup, setState]);

  return {
    state,
    /**
     * ダイアログを表示する
     * @param item
     */
    setOpened: (item: Item) => {
      setState((draft) => {
        draft.item = item;
        draft.isOpened = true;
      });
    },
    /**
     * ダイアログを閉じる
     */
    close: () => {
      setState((draft) => {
        draft.item = null;
        draft.isOpened = false;
      });
    },
    /**
     * テーブルを表示する
     * @param opened
     */
    setTableOpened: (opened: boolean) => {
      setState((draft) => {
        draft.tableOpened = opened;
      });
    },
  };
}
