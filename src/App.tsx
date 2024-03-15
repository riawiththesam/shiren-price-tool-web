import "./App.css";
import Box from "@mui/material/Box";
import { ShirenAppBar } from "./features/shiren-app-bar/components/shiren-app-bar.tsx";
import { useState } from "react";
import { ShirenDrawer } from "./features/shiren-app-bar/components/shiren-drawer.tsx";
import { MainUI } from "./features/main-ui/components/main-ui.tsx";

function App() {
  const [opened, setOpened] = useState(false);
  const toggleOpened = () => {
    setOpened(!opened);
  };

  return (
    <>
      <Box>
        <ShirenAppBar onClickDrawerOpen={toggleOpened} />
        <ShirenDrawer opened={opened} onClickClose={toggleOpened} />
        <MainUI />
      </Box>
    </>
  );
}

export default App;
