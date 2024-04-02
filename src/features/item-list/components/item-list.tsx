import { Box, Divider, List } from "@mui/material";
import { FC } from "react";
import {
  ItemFilter,
  ItemWithPurchseType,
  useItemList,
} from "../hooks/use-item-list";
import { CollapsibleListItem } from "./collapsible-list-item";
import { ItemListFilter } from "./item-list-filter";

function filterItemList(
  itemList: Array<ItemWithPurchseType>,
  filter: ItemFilter
): Array<ItemWithPurchseType> {
  let filteredList = itemList;

  // 購入アイテムを表示しない設定のときはpurchseTypeがbuyのものを除く
  if (filter.purchaseType != "buy") {
    filteredList = filteredList.filter((pair) => pair.purchaseType != "buy");
  }
  // 売却アイテムを表示しない設定のときはpurchseTypeがsellのものを除く
  if (filter.purchaseType != "sell") {
    filteredList = filteredList.filter((pair) => pair.purchaseType != "sell");
  }

  // 草
  if (filter.showItemType != "Kusa") {
    filteredList = filteredList.filter((pair) => pair.item.itemType != "Kusa");
  }

  // 巻物
  if (filter.showItemType != "Makimono") {
    filteredList = filteredList.filter(
      (pair) => pair.item.itemType != "Makimono"
    );
  }

  // 壺
  if (filter.showItemType != "Tsubo") {
    filteredList = filteredList.filter((pair) => pair.item.itemType != "Tsubo");
  }

  // 杖
  if (filter.showItemType != "Tsue") {
    filteredList = filteredList.filter((pair) => pair.item.itemType != "Tsue");
  }

  // 腕輪
  if (filter.showItemType != "Udewa") {
    filteredList = filteredList.filter((pair) => pair.item.itemType != "Udewa");
  }

  return filteredList;
}

export const ItemList: FC = () => {
  const { itemListState, setPurchaseType, toggleItemOpened, setItemType } =
    useItemList();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <ItemListFilter
        filter={itemListState.filter}
        setPurchaseType={setPurchaseType}
        setItemType={setItemType}
      />
      <Divider />
      <List sx={{ paddingX: "20px", flexGrow: 1, overflowY: "auto" }}>
        {itemListState.groupedList.map((group) => {
          const itemList = filterItemList(group.itemList, itemListState.filter);
          return itemList.length > 0 ? (
            <CollapsibleListItem
              key={group.value}
              itemList={itemList}
              listOpened={group.opened}
              value={group.value}
              onClick={toggleItemOpened}
            />
          ) : null;
        })}
      </List>
    </Box>
  );
};
