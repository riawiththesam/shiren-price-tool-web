import { Box } from "@mui/material";
import { FC } from "react";
import { useItemList } from "../hooks/use-item-list";
import { Item, ItemType } from "../../../types/Item";
import { ItemListTable } from "./item-list-table";

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

  const rows = rawItemList.map((item) => {
    return createData(item);
  });
  return (
    <Box sx={{ margin: 5, maxWidth: 800 }}>
      <ItemListTable rows={rows} />
    </Box>
  );
};
