import "./App.css";
import Box from "@mui/material/Box";
import { ItemSearch } from "./features/item-search/components/item-search.tsx";
import { ShirenAppBar } from "./features/shiren-app-bar/components/shiren-app-bar.tsx";
import { useState } from "react";
import { ShirenDrawer } from "./features/shiren-app-bar/components/shiren-drawer.tsx";

function App() {
  const [opened, setOpened] = useState(true);
  const toggleOpened = () => {
    setOpened(!opened);
  };

  return (
    <>
      <Box>
        <ShirenAppBar onClickDrawerOpen={toggleOpened} />
        <ShirenDrawer opened={opened} onClickClose={toggleOpened} />
        <ItemSearch />
      </Box>
    </>
  );
}

export default App;
