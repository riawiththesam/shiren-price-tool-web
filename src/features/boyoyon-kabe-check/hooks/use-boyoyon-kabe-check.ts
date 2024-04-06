import { produce } from "immer";
import { atom, useAtom } from "jotai";
import range from "just-range";

type MapChip = 0 | 1;

interface BoyoyonKabeCheckState {
  roomHeight: number;
  roomWidth: number;
  roomMap: Array<Array<MapChip>>;
}

const boyoyonKabeCheckAtom = atom<BoyoyonKabeCheckState>({
  roomHeight: 10,
  roomWidth: 10,
  roomMap: range(0, 10).map(() => {
    return range(0, 10).map(() => 0 as MapChip);
  }),
});

export function useBoyoyonKabeCheck() {
  const [boyoyonKabeCheckState, setBoyoyonKabeCheckState] =
    useAtom(boyoyonKabeCheckAtom);

  const onClickHorizontalAdd = () => {
    const next = produce(boyoyonKabeCheckState, (draft) => {
      draft.roomWidth += 1;
      draft.roomMap = draft.roomMap.map((line) => {
        return [...line, 1];
      });
      return draft;
    });
    setBoyoyonKabeCheckState(next);
  };

  const onClickHorizontalRemove = () => {
    const next = produce(boyoyonKabeCheckState, (draft) => {
      draft.roomWidth -= 1;
      draft.roomMap = draft.roomMap.map((line) => {
        return [...line].slice(0, -1);
      });
      return draft;
    });
    setBoyoyonKabeCheckState(next);
  };

  const onClickVerticalAdd = () => {
    const next = produce(boyoyonKabeCheckState, (draft) => {
      draft.roomHeight += 1;
      draft.roomMap = [
        ...draft.roomMap,
        new Array(draft.roomMap[0].length).fill(1),
      ];
      return draft;
    });
    setBoyoyonKabeCheckState(next);
  };

  const onClickVerticalRemove = () => {
    const next = produce(boyoyonKabeCheckState, (draft) => {
      draft.roomHeight += 1;
      draft.roomMap = draft.roomMap.slice(0, -1);
      return draft;
    });
    setBoyoyonKabeCheckState(next);
  };

  return {
    roomHeight: boyoyonKabeCheckState.roomHeight,
    roomWidth: boyoyonKabeCheckState.roomWidth,
    roomMap: boyoyonKabeCheckState.roomMap,
    onClickHorizontalAdd,
    onClickHorizontalRemove,
    onClickVerticalAdd,
    onClickVerticalRemove,
  };
}
