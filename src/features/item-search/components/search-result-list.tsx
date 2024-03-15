import List from "@mui/material/List";
import { Item, ItemType } from "../../../types/Item";
import { SearchResultListSubheader } from "./search-result-list-subheader";
import { SearchResultListItem } from "./search-result-list-item";
import { PurchaseType } from "../../../types/purchase";
import { ListItem } from "@mui/material";

export interface SearchResultListProps {
  list: Array<Item>;
  itemType: ItemType;
  purchaseType: PurchaseType;
}

export const SearchResultList: React.FC<SearchResultListProps> = (props) => {
  const { list, itemType, purchaseType } = props;
  if (list.length == 0) return null;
  const warningNoroi = list.some((item) => item.state == "Noroi");
  const warningShukufuku = list.some((item) => item.state == "Shukufuku");
  return (
    <ListItem sx={{ flex: "0 0 auto", width: "auto" }}>
      <List
        subheader={
          <SearchResultListSubheader
            itemType={itemType}
            purchaseType={purchaseType}
            warningNoroi={warningNoroi}
            warningShukufuku={warningShukufuku}
          />
        }
      >
        {list.map((item, index) => {
          return <SearchResultListItem key={index} item={item} />;
        })}
      </List>
    </ListItem>
  );
};
