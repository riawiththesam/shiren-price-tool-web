import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Item } from "../types/Item";

export interface SearchResultListProps {
  list: Array<Item>;
}

export const SearchResultList: React.FC<SearchResultListProps> = (props) => {
  const { list } = props;
  if (list.length == 0) return null;
  return (
    <List>
      {list.map((item, index) => {
        return <ListItem key={index}>{item.name}</ListItem>;
      })}
    </List>
  );
};
