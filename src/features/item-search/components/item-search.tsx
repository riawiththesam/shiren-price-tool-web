import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useItemSearch } from "../hooks/use-item-search.ts";
import { SearchResultList } from "./search-result-list.tsx";
import { List } from "@mui/material";

export const ItemSearch: React.FC = () => {
  const {
    buyMakimonoList,
    sellMakimonoList,
    buyUdewaList,
    sellUdewaList,
    buyKusaList,
    sellKusaList,
    buyTsueList,
    sellTsueList,
    buyTsuboList,
    sellTsuboList,
    setPrice,
  } = useItemSearch();
  const onChangeTextField: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setPrice(event.target.value);
  };

  return (
    <Stack spacing={2} sx={{ margin: 5 }}>
      <TextField
        id="outlined-basic"
        label="金額を入力"
        variant="outlined"
        onChange={onChangeTextField}
      />
      <List
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          overflowX: "auto",
        }}
      >
        <SearchResultList
          list={buyMakimonoList}
          itemType="Makimono"
          purchaseType="buy"
        />
        <SearchResultList
          list={sellMakimonoList}
          itemType="Makimono"
          purchaseType="sell"
        />
        <SearchResultList
          list={buyUdewaList}
          itemType="Udewa"
          purchaseType="buy"
        />
        <SearchResultList
          list={sellUdewaList}
          itemType="Udewa"
          purchaseType="sell"
        />
        <SearchResultList
          list={buyKusaList}
          itemType="Kusa"
          purchaseType="buy"
        />
        <SearchResultList
          list={sellKusaList}
          itemType="Kusa"
          purchaseType="sell"
        />
        <SearchResultList
          list={buyTsueList}
          itemType="Tsue"
          purchaseType="buy"
        />
        <SearchResultList
          list={sellTsueList}
          itemType="Tsue"
          purchaseType="sell"
        />
        <SearchResultList
          list={buyTsuboList}
          itemType="Tsubo"
          purchaseType="buy"
        />
        <SearchResultList
          list={sellTsuboList}
          itemType="Tsubo"
          purchaseType="sell"
        />
      </List>
    </Stack>
  );
};
