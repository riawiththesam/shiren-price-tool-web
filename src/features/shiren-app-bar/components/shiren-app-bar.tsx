import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FC } from "react";

export interface ShirenAppBarProps {
  onClickDrawerOpen: () => void;
}

export const ShirenAppBar: FC<ShirenAppBarProps> = (props) => {
  const { onClickDrawerOpen } = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={onClickDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          シレン6ツール
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
