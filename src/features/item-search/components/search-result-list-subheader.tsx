import ListSubheader from "@mui/material/ListSubheader";
import { ItemType } from "../types/Item";
import { Box } from "@mui/material";
import { SearchResultListSubheaderWarning } from "./search-result-list-subheader-warning";

type ItemTypeTextMap = {
  [key in ItemType]: string;
};
const itemTypeTextMap: ItemTypeTextMap = {
  Makimono: "巻物",
  Kusa: "草",
  Udewa: "腕輪",
  Tsue: "杖",
};

export interface SearchResultListSubheaderProps {
  itemType: ItemType;
  warningNoroi: boolean;
  warningShukufuku: boolean;
}

export const SearchResultListSubheader: React.FC<
  SearchResultListSubheaderProps
> = (props) => {
  const { itemType, warningNoroi, warningShukufuku } = props;
  return (
    <ListSubheader>
      <Box component="span">{itemTypeTextMap[itemType]}</Box>
      <SearchResultListSubheaderWarning
        warningType="Noroi"
        show={warningNoroi}
      />
      <SearchResultListSubheaderWarning
        warningType="Shukufuku"
        show={warningShukufuku}
      />
    </ListSubheader>
  );
};
