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
    setBoyoyonKabeCheckState({
      ...boyoyonKabeCheckState,
      roomWidth: boyoyonKabeCheckState.roomWidth + 1,
    });
  };

  const onClickHorizontalRemove = () => {
    setBoyoyonKabeCheckState({
      ...boyoyonKabeCheckState,
      roomWidth: boyoyonKabeCheckState.roomWidth - 1,
    });
  };

  const onClickVerticalAdd = () => {
    setBoyoyonKabeCheckState({
      ...boyoyonKabeCheckState,
      roomHeight: boyoyonKabeCheckState.roomHeight + 1,
    });
  };

  const onClickVerticalRemove = () => {
    setBoyoyonKabeCheckState({
      ...boyoyonKabeCheckState,
      roomHeight: boyoyonKabeCheckState.roomHeight - 1,
    });
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
