import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Item, ItemType } from "../types/Item";
import { SearchResultListSubheader } from "./search-result-list-subheader";

export interface SearchResultListProps {
  list: Array<Item>;
  itemType: ItemType;
}

export const SearchResultList: React.FC<SearchResultListProps> = (props) => {
  const { list, itemType } = props;
  if (list.length == 0) return null;
  const warningNoroi = list.some((item) => item.state == "Noroi");
  const warningShukufuku = list.some((item) => item.state == "Shukufuku");
  return (
    <List
      subheader={
        <SearchResultListSubheader
          itemType={itemType}
          warningNoroi={warningNoroi}
          warningShukufuku={warningShukufuku}
        />
      }
    >
      {list.map((item, index) => {
        return <ListItem key={index}>{item.name}</ListItem>;
      })}
    </List>
  );
};
