import "./App.css";
import { ShirenAppBar } from "./features/shiren-app-bar/components/shiren-app-bar.tsx";
import { ShirenDrawer } from "./features/shiren-app-bar/components/shiren-drawer.tsx";
import { MainUI } from "./features/main-ui/components/main-ui.tsx";
import { useMainUI } from "./features/main-ui/hooks/use-main-ui.ts";
import { Box, Stack } from "@mui/material";

function App() {
  const { mainUIState, toggleDrawer } = useMainUI();

  return (
    <>
      <Stack sx={{ height: "100%" }}>
        <ShirenAppBar onClickDrawerOpen={toggleDrawer} />
        <ShirenDrawer
          opened={mainUIState.drawerOpened}
          onClickClose={toggleDrawer}
        />
        <Box sx={{ flexGrow: 1, overflowY: "scroll" }}>
          <MainUI />
        </Box>
      </Stack>
    </>
  );
}

export default App;
