import { Box, List } from "@mui/material";
import { FC } from "react";
import { ItemWithPurchseType, useItemList } from "../hooks/use-item-list";
import { CollapsibleListItem } from "./collapsible-list-item";
import { ItemListFilter } from "./item-list-filter";

function filterItemList(
  itemList: Array<ItemWithPurchseType>,
  showBuyItems: boolean,
  showSellItems: boolean
): Array<ItemWithPurchseType> {
  let filteredList = itemList;

  // 購入アイテムを表示しない設定のときはpurchseTypeがbuyのものを除く
  if (!showBuyItems) {
    filteredList = filteredList.filter((pair) => pair.purchaseType != "buy");
  }
  // 売却アイテムを表示しない設定のときはpurchseTypeがsellのものを除く
  if (!showSellItems) {
    filteredList = filteredList.filter((pair) => pair.purchaseType != "sell");
  }

  return filteredList;
}

export const ItemList: FC = () => {
  const {
    itemListState,
    toggleItemOpened,
    showBuyItems,
    toggleShowBuyItems,
    showSellItems,
    toggleShowSellItems,
  } = useItemList();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <ItemListFilter
        showBuyItems={showBuyItems}
        toggleShowBuyItems={toggleShowBuyItems}
        showSellItems={showSellItems}
        toggleShowSellItems={toggleShowSellItems}
      />
      <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
        <List>
          {itemListState.groupedList.map((group) => {
            const itemList = filterItemList(
              group.itemList,
              showBuyItems,
              showSellItems
            );
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
    </Box>
  );
};
