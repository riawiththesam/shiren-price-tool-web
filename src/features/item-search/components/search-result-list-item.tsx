import { ListItem, Box } from "@mui/material";
import { Item, ItemType } from "../types/Item";

export interface SearchResultListItemProps {
  itemType: ItemType;
  item: Item;
}

type ItemTypeToTextMap = {
  [key in ItemType]: string;
};
const itemTypeToTextMap: ItemTypeToTextMap = {
  Makimono: "巻",
  Kusa: "草",
  Udewa: "腕",
  Tsue: "杖",
  Tsubo: "壺",
};

const NoroiBox: React.FC<{ show: boolean }> = (props) => {
  const { show } = props;
  if (!show) return null;
  return (
    <Box component="span" sx={{ color: "warning.main", marginRight: 1 }}>
      呪
    </Box>
  );
};

const ShukufukuBox: React.FC<{ show: boolean }> = (props) => {
  const { show } = props;
  if (!show) return null;
  return (
    <Box component="span" sx={{ color: "warning.main", marginRight: 1 }}>
      祝
    </Box>
  );
};

const ItemTypeBox: React.FC<{ show: boolean; itemType: ItemType }> = (
  props
) => {
  const { show, itemType } = props;
  if (!show) return null;
  return (
    <Box component="span" sx={{ color: "primary.main", marginRight: 1 }}>
      {itemTypeToTextMap[itemType]}
    </Box>
  );
};

export const SearchResultListItem: React.FC<SearchResultListItemProps> = (
  props
) => {
  const { item, itemType } = props;
  const showNoroi = item.state == "Noroi";
  const showShukufuku = item.state == "Shukufuku";
  const showItemType = item.state == "Normal";
  return (
    <ListItem>
      <NoroiBox show={showNoroi} />
      <ShukufukuBox show={showShukufuku} />
      <ItemTypeBox show={showItemType} itemType={itemType} />
      {item.name}
    </ListItem>
  );
};
