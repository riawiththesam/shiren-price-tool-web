import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Collapse,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
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

  const initialsText = itemList
    .map((pair) => {
      return pair.item.name.charAt(0);
    })
    .join("/");

  const onClickButton = () => {
    onClick(value);
  };

  return (
    <ListItem sx={{ flexFlow: "column", alignItems: "stretch" }}>
      <ListItemButton onClick={onClickButton}>
        <ListItemText primary={value} />
        <Typography
          variant="subtitle2"
          sx={{
            paddingLeft: "20px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {initialsText}
        </Typography>
        {listOpened ? <RemoveIcon /> : <AddIcon />}
      </ListItemButton>
      <Collapse
        in={listOpened}
        timeout={200}
        unmountOnExit
        sx={{ paddingLeft: "32px" }}
      >
        <ItemListTable rows={rows} />
      </Collapse>
    </ListItem>
  );
};
