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
import { useMainUI } from "../../main-ui/hooks/use-main-ui";

export interface ShirenDrawerProps {
  opened: boolean;
  onClickClose: () => void;
}

export const ShirenDrawer: FC<ShirenDrawerProps> = (props) => {
  const { opened, onClickClose } = props;
  const { setItemList, setItemSearch } = useMainUI();

  return (
    <Drawer anchor="left" open={opened}>
      <Toolbar sx={{ justifyContent: "flex-end", width: 250 }}>
        <IconButton onClick={onClickClose}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        <ListItem disablePadding onClick={setItemSearch}>
          <ListItemButton>
            <ListItemText primary={"識別ツール"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={setItemList}>
          <ListItemButton>
            <ListItemText primary={"値段表"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};
