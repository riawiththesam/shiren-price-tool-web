import "./App.css";
import Box from "@mui/material/Box";
import { ItemSearch } from "./features/item-search/components/item-search.tsx";

function App() {
  return (
    <>
      <Box sx={{ margin: 5 }}>
        <ItemSearch />
      </Box>
    </>
  );
}

export default App;
