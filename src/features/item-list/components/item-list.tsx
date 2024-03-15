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
  if (!filter.showBuyItems) {
    filteredList = filteredList.filter((pair) => pair.purchaseType != "buy");
  }
  // 売却アイテムを表示しない設定のときはpurchseTypeがsellのものを除く
  if (!filter.showSellItems) {
    filteredList = filteredList.filter((pair) => pair.purchaseType != "sell");
  }

  // 草
  if (!filter.showKusaItems) {
    filteredList = filteredList.filter((pair) => pair.item.itemType != "Kusa");
  }

  // 巻物
  if (!filter.showMakimonoItems) {
    filteredList = filteredList.filter(
      (pair) => pair.item.itemType != "Makimono"
    );
  }

  // 壺
  if (!filter.showTsuboItems) {
    filteredList = filteredList.filter((pair) => pair.item.itemType != "Tsubo");
  }

  // 杖
  if (!filter.showTsueItems) {
    filteredList = filteredList.filter((pair) => pair.item.itemType != "Tsue");
  }

  // 腕輪
  if (!filter.showUdewaItems) {
    filteredList = filteredList.filter((pair) => pair.item.itemType != "Udewa");
  }

  return filteredList;
}

export const ItemList: FC = () => {
  const {
    itemListState,
    toggleItemOpened,
    toggleShowBuyItems,
    toggleShowSellItems,
    toggleShowKusaItems,
    toggleShowMakimonoItems,
    toggleShowTsuboItems,
    toggleShowTsueItems,
    toggleShowUdewaItems,
    filter,
  } = useItemList();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <ItemListFilter
        toggleShowBuyItems={toggleShowBuyItems}
        toggleShowSellItems={toggleShowSellItems}
        toggleShowKusaItems={toggleShowKusaItems}
        toggleShowMakimonoItems={toggleShowMakimonoItems}
        toggleShowTsuboItems={toggleShowTsuboItems}
        toggleShowTsueItems={toggleShowTsueItems}
        toggleShowUdewaItems={toggleShowUdewaItems}
        filter={filter}
      />
      <Divider />
      <List sx={{ paddingX: "20px", flexGrow: 1, overflowY: "auto" }}>
        {itemListState.groupedList.map((group) => {
          const itemList = filterItemList(group.itemList, filter);
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
