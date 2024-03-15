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

interface CollapsibleListItemProps {
  listOpened: boolean;
  value: string;
  itemList: Array<ItemWithPurchseType>;
  onClick: (value: string) => void;
}

export const CollapsibleListItem: FC<CollapsibleListItemProps> = (props) => {
  const { listOpened, value, itemList, onClick } = props;

  const rows = itemList.map((pair) => {
    return pair.item;
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
      <Collapse in={listOpened} timeout={200} unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ItemListTable rows={rows} />
          </ListItemButton>
        </List>
      </Collapse>
    </ListItem>
  );
};
