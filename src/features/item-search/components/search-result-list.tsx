import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import { Item, ItemType } from "../types/Item";

type ItemTypeTextMap = {
  [key in ItemType]: string;
};
const itemTypeTextMap: ItemTypeTextMap = {
  Makimono: "巻物",
  Kusa: "草",
  Udewa: "腕輪",
};

export interface SearchResultListProps {
  list: Array<Item>;
  itemType: ItemType;
}

export const SearchResultList: React.FC<SearchResultListProps> = (props) => {
  const { list, itemType } = props;
  if (list.length == 0) return null;
  return (
    <List
      subheader={<ListSubheader>{itemTypeTextMap[itemType]}</ListSubheader>}
    >
      {list.map((item, index) => {
        return <ListItem key={index}>{item.name}</ListItem>;
      })}
    </List>
  );
};
