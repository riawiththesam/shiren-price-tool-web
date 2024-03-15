import { Box, List, ListSubheader } from "@mui/material";
import { FC } from "react";
import { useItemList } from "../hooks/use-item-list";
import { CollapsibleListItem } from "./collapsible-list-item";

export const ItemList: FC = () => {
  const { itemListState, toggleItemOpened } = useItemList();

  return (
    <Box sx={{ margin: 5, maxWidth: 800 }}>
      <List
        sx={{ width: "100%" }}
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            金額
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
