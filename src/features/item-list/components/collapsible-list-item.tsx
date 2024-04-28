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
import { ItemGroup } from "../hooks/use-item-list";

interface CollapsibleListItemProps {
  itemGroup: ItemGroup;
  onClick: (value: string) => void;
}

export const CollapsibleListItem: FC<CollapsibleListItemProps> = (props) => {
  const { itemGroup, onClick } = props;

  const onClickButton = () => {
    onClick(itemGroup.value);
  };

  return (
    <ListItem sx={{ flexFlow: "column", alignItems: "stretch" }}>
      <ListItemButton onClick={onClickButton}>
        <ListItemText
          primary={itemGroup.value}
          sx={{ flexGrow: 0, flexShrink: 0 }}
        />
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
          {itemGroup.itemList.map((item, i) => (
            <Box key={i} component="span" className={item.state}>
              {item.shortName}
            </Box>
          ))}
        </Typography>
        {itemGroup.opened ? <RemoveIcon /> : <AddIcon />}
      </ListItemButton>
      <Collapse
        in={itemGroup.opened}
        timeout={200}
        unmountOnExit
        sx={{ paddingLeft: { xs: "0px", sm: "20px" } }}
      >
        <ItemListTable rows={itemGroup.itemList} />
      </Collapse>
    </ListItem>
  );
};
