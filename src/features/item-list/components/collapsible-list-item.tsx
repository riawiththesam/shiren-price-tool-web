import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Box,
  Collapse,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { ItemWithPurchseType } from "../hooks/use-item-list";
import { ItemListTable } from "./item-list-table";
import { ItemState } from "../../../types/Item";

function itemStateToColor(state: ItemState): string {
  switch (state) {
    case "Normal":
      return "inherit";
    case "Noroi":
      return "red";
    case "Shukufuku":
      return "blue";
  }
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
    return pair.item;
  });

  const onClickButton = () => {
    onClick(value);
  };

  return (
    <ListItem sx={{ flexFlow: "column", alignItems: "stretch" }}>
      <ListItemButton onClick={onClickButton}>
        <ListItemText primary={value} sx={{ flexGrow: 0, flexShrink: 0 }} />
        <Typography
          variant="subtitle2"
          sx={{
            flexGrow: 1,
            paddingLeft: "20px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            // 子要素の最初の要素以外の要素全ての前方に"/"を追加
            "& > *:not(:first-of-type):before": {
              content: '"/"',
            },
          }}
        >
          {itemList.map((pair, i) => (
            <Box
              key={i}
              component="span"
              sx={{
                color: itemStateToColor(pair.item.state),
              }}
            >
              {pair.item.name.charAt(0)}
            </Box>
          ))}
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
