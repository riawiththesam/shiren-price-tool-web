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
import { ItemListTable } from "./item-list-table";
import { Item } from "../../../types/Item";

interface CollapsibleListItemProps {
  listOpened: boolean;
  value: string;
  itemList: Array<Item>;
  onClick: (value: string) => void;
}

export const CollapsibleListItem: FC<CollapsibleListItemProps> = (props) => {
  const { listOpened, value, itemList, onClick } = props;

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
            "& > *": {
              "&.Noroi": {
                color: "red",
              },
              "&.Shukufuku": {
                color: "blue",
              },
            },
          }}
        >
          {itemList.map((item, i) => (
            <Box key={i} component="span" className={item.state}>
              {item.shortName}
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
        <ItemListTable rows={itemList} />
      </Collapse>
    </ListItem>
  );
};
