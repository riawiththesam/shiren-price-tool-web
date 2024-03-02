import ListSubheader from "@mui/material/ListSubheader";
import { ItemType } from "../../../types/Item";
import { Box } from "@mui/material";
import { SearchResultListSubheaderWarning } from "./search-result-list-subheader-warning";
import { PurchaseType } from "../../../types/purchase";

type PurchaseTypeTextMap = {
  [key in PurchaseType]: string;
};
const purchaseTypeTextMap: PurchaseTypeTextMap = {
  buy: "買",
  sell: "売",
};

type ItemTypeTextMap = {
  [key in ItemType]: string;
};
const itemTypeTextMap: ItemTypeTextMap = {
  Makimono: "巻物",
  Kusa: "草",
  Udewa: "腕輪",
  Tsue: "杖",
  Tsubo: "壺",
};

export interface SearchResultListSubheaderProps {
  itemType: ItemType;
  purchaseType: PurchaseType;
  warningNoroi: boolean;
  warningShukufuku: boolean;
}

export const SearchResultListSubheader: React.FC<
  SearchResultListSubheaderProps
> = (props) => {
  const { itemType, purchaseType, warningNoroi, warningShukufuku } = props;
  return (
    <ListSubheader>
      <Box component="span" sx={{ marginRight: 1 }}>
        {purchaseTypeTextMap[purchaseType]}
      </Box>
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
