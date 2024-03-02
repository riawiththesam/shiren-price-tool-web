import { ListItem, Typography } from "@mui/material";
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
};

const NoroiTypography: React.FC<{ show: boolean }> = (props) => {
  const { show } = props;
  if (!show) return null;
  return (
    <Typography component="span" sx={{ color: "warning.main", margin: 1 }}>
      呪
    </Typography>
  );
};

const ShukufukuTypography: React.FC<{ show: boolean }> = (props) => {
  const { show } = props;
  if (!show) return null;
  return (
    <Typography component="span" sx={{ color: "warning.main", margin: 1 }}>
      祝
    </Typography>
  );
};

const ItemTypeTypography: React.FC<{ show: boolean; itemType: ItemType }> = (
  props
) => {
  const { show, itemType } = props;
  if (!show) return null;
  return (
    <Typography component="span" sx={{ color: "primary.main", margin: 1 }}>
      {itemTypeToTextMap[itemType]}
    </Typography>
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
      <NoroiTypography show={showNoroi} />
      <ShukufukuTypography show={showShukufuku} />
      <ItemTypeTypography show={showItemType} itemType={itemType} />
      {item.name}
    </ListItem>
  );
};
