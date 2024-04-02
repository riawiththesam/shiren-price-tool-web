import { Box, Divider, List } from "@mui/material";
import { FC } from "react";
import { useItemList } from "../hooks/use-item-list";
import { CollapsibleListItem } from "./collapsible-list-item";
import { ItemListFilter } from "./item-list-filter";

export const ItemList: FC = () => {
  const {
    itemListState,
    filteredItemListState,
    setPurchaseType,
    toggleItemOpened,
    setItemType,
  } = useItemList();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <ItemListFilter
        filter={itemListState.filter}
        setPurchaseType={setPurchaseType}
        setItemType={setItemType}
      />
      <Divider />
      <List sx={{ paddingX: "20px", flexGrow: 1, overflowY: "auto" }}>
        {filteredItemListState.filteredList.map((group) => {
          return group.itemList.length > 0 ? (
            <CollapsibleListItem
              key={group.value}
              itemList={group.itemList}
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
