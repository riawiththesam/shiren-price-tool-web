import { Box, List, ListSubheader, Stack, Checkbox } from "@mui/material";
import { FC } from "react";
import { useItemList } from "../hooks/use-item-list";
import { CollapsibleListItem } from "./collapsible-list-item";

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
          <ListSubheader component="div">
            <Stack direction="row" spacing={3}>
              <Box>金額</Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                購入
                <Checkbox checked={showBuyItems} onClick={toggleShowBuyItems} />
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                売却
                <Checkbox
                  checked={showSellItems}
                  onClick={toggleShowSellItems}
                />
              </Box>
            </Stack>
          </ListSubheader>
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
