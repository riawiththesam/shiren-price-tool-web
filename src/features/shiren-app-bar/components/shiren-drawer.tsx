import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { FC } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export interface ShirenDrawerProps {
  opened: boolean;
  onClickClose: () => void;
}

export const ShirenDrawer: FC<ShirenDrawerProps> = (props) => {
  const { opened, onClickClose } = props;

  return (
    <Drawer anchor="left" open={opened}>
      <Toolbar sx={{ justifyContent: "flex-end", width: 250 }}>
        <IconButton onClick={onClickClose}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {["識別ツール", "値段表"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
