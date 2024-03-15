import "./App.css";
import Box from "@mui/material/Box";
import { ItemSearch } from "./features/item-search/components/item-search.tsx";
import { ShirenAppBar } from "./features/shiren-app-bar/components/shiren-app-bar/shiren-app-bar.tsx";

function App() {
  return (
    <>
      <Box>
        <ShirenAppBar />
        <ItemSearch />
      </Box>
    </>
  );
}

export default App;
