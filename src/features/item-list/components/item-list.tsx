import { Box, List } from "@mui/material";
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
    setEnableUnique,
    setItemType,
  } = useItemList();

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <ItemListFilter
        filter={itemListState.filter}
        setPurchaseType={setPurchaseType}
        setItemType={setItemType}
        setEnableUnique={setEnableUnique}
      />
      <List
        sx={{
          paddingX: { xs: "0px", sm: "20px" },
          flexGrow: 1,
          overflowY: "auto",
        }}
      >
        {filteredItemListState.filteredList.map((group, index) => {
          return group.itemList.length > 0 ? (
            <CollapsibleListItem
              key={index}
              itemGroup={group}
              onClick={toggleItemOpened}
            />
          ) : null;
        })}
      </List>
    </Box>
  );
};
