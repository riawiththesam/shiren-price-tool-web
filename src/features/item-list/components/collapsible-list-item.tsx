import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { FC } from "react";

interface CollapsibleListItemProps {
  listOpened: boolean;
  text: string;
  onClick: () => void;
}

export const CollapsibleListItem: FC<CollapsibleListItemProps> = (props) => {
  const { listOpened, text, onClick } = props;

  return (
    <ListItem sx={{ flexFlow: "column", alignItems: "stretch" }}>
      <ListItemButton onClick={onClick}>
        <ListItemText primary={text} />
        {listOpened ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={listOpened} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </ListItem>
  );
};
