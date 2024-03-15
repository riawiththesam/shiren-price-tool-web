import { Box, List } from "@mui/material";
import { FC } from "react";
import { useItemList } from "../hooks/use-item-list";
import { CollapsibleListItem } from "./collapsible-list-item";
import { ItemListSubheader } from "./item-list-subleader";

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
    <Box sx={{ margin: 5, maxWidth: 800 }}>
      <List
        sx={{ width: "100%" }}
        subheader={
          <ItemListSubheader
            showBuyItems={showBuyItems}
            toggleShowBuyItems={toggleShowBuyItems}
            showSellItems={showSellItems}
            toggleShowSellItems={toggleShowSellItems}
          />
        }
      >
        {itemListState.groupedList.map((group) => {
          return (
            <CollapsibleListItem
              key={group.value}
              itemList={group.itemList}
              listOpened={group.opened}
              value={group.value}
              onClick={toggleItemOpened}
            />
          );
        })}
      </List>
    </Box>
  );
};
