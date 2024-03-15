import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { FC } from "react";
import { ItemWithPurchseType } from "../hooks/use-item-list";
import { ItemListTable } from "./item-list-table";
import { Item, ItemType } from "../../../types/Item";

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

interface CollapsibleListItemProps {
  listOpened: boolean;
  value: string;
  itemList: Array<ItemWithPurchseType>;
  onClick: (value: string) => void;
}

export const CollapsibleListItem: FC<CollapsibleListItemProps> = (props) => {
  const { listOpened, value, itemList, onClick } = props;

  const rows = itemList.map((pair) => {
    return createData(pair.item);
  });

  const onClickButton = () => {
    onClick(value);
  };

  return (
    <ListItem sx={{ flexFlow: "column", alignItems: "stretch" }}>
      <ListItemButton onClick={onClickButton}>
        <ListItemText primary={value} />
        {listOpened ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={listOpened} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ItemListTable rows={rows} />
          </ListItemButton>
        </List>
      </Collapse>
    </ListItem>
  );
};
