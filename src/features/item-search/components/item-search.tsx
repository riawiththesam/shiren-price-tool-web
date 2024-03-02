import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useItemSearch } from "../hooks/use-item-search.ts";
import { SearchResultList } from "./search-result-list.tsx";

export const ItemSearch: React.FC<void> = () => {
  const { makimonoList, udewaList, kusaList, setPrice } = useItemSearch();
  const onChangeTextField: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setPrice(event.target.value);
  };

  return (
    <Stack spacing={2}>
      <TextField
        id="outlined-basic"
        label="金額を入力"
        variant="outlined"
        onChange={onChangeTextField}
      />
      <Stack direction="row" spacing={2}>
        <SearchResultList list={makimonoList} />
        <SearchResultList list={udewaList} />
        <SearchResultList list={kusaList} />
      </Stack>
    </Stack>
  );
};
