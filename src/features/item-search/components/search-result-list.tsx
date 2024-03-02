import List from "@mui/material/List";
import { Item, ItemType } from "../../../types/Item";
import { SearchResultListSubheader } from "./search-result-list-subheader";
import { SearchResultListItem } from "./search-result-list-item";
import { PurchaseType } from "../../../types/purchase";

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
        return (
          <SearchResultListItem key={index} item={item} itemType={itemType} />
        );
      })}
    </List>
  );
};
