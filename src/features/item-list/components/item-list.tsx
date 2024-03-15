import { Box, List, ListSubheader } from "@mui/material";
import { FC, useState } from "react";
import { useItemList } from "../hooks/use-item-list";
import { Item, ItemType } from "../../../types/Item";
import { ItemListTable } from "./item-list-table";
import { CollapsibleListItem } from "./collapsible-list-item";

function itemTypeToText(itemType: ItemType): string {
  switch (itemType) {
    case "Makimono":
      return "巻物";
    case "Kusa":
      return "草";
    case "Udewa":
      return "腕輪";
    case "Tsue":
      return "杖";
    case "Tsubo":
      return "壺";
  }
}

function createData(item: Item) {
  return {
    name: item.name,
    itemType: itemTypeToText(item.itemType),
    buy: item.buy,
    sell: item.sell,
    state: item.state,
  };
}

export const ItemList: FC = () => {
  const { rawItemList } = useItemList();
  const [listOpened, setListOpened] = useState(true);

  const rows = rawItemList.map((item) => {
    return createData(item);
  });

  const onClick = () => {
    setListOpened(!listOpened);
  };

  return (
    <Box sx={{ margin: 5, maxWidth: 800 }}>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            金額
          </ListSubheader>
        }
      >
        <CollapsibleListItem
          listOpened={listOpened}
          text={"Test"}
          onClick={onClick}
        />
      </List>
      <ItemListTable rows={rows} />
    </Box>
  );
};
