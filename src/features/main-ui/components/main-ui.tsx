import { FC } from "react";
import { ItemSearch } from "../../item-search/components/item-search";
import { FeatureUIStateType, useMainUI } from "../hooks/use-main-ui";
import { ItemList } from "../../item-list/components/item-list";
import { BoyoyonKabeCheck } from "../../boyoyon-kabe-check/components/BoyoyonKabeCheck";

interface MainUILayoutProps {
  layoutType: FeatureUIStateType;
}

const MainUILayout: FC<MainUILayoutProps> = (props) => {
  const { layoutType } = props;

  switch (layoutType) {
    case "ItemSearch":
      return <ItemSearch />;
    case "ItemList":
      return <ItemList />;
    case "BoyoyonKabeCheck":
      return <BoyoyonKabeCheck />;
  }
};

export const MainUI: FC = () => {
  const { mainUIState } = useMainUI();

  return <MainUILayout layoutType={mainUIState.featureUIState} />;
};
