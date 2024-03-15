import { FC } from "react";
import { ItemSearch } from "../../item-search/components/item-search";
import { FeatureUIStateType, useMainUI } from "../hooks/use-main-ui";
import { ItemList } from "../../item-list/components/item-list";

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
  }
};

export const MainUI: FC = () => {
  const { mainUIState } = useMainUI();

  return <MainUILayout layoutType={mainUIState.featureUIState} />;
};