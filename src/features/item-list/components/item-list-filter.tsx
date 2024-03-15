import { Box, Checkbox, Stack } from "@mui/material";
import { FC } from "react";
import { ItemFilter } from "../hooks/use-item-list";

export interface ItemListSubheaderProps {
  toggleShowBuyItems: () => void;
  toggleShowSellItems: () => void;
  toggleShowKusaItems: () => void;
  filter: ItemFilter;
}

export const ItemListFilter: FC<ItemListSubheaderProps> = (props) => {
  const {
    toggleShowBuyItems,
    toggleShowSellItems,
    toggleShowKusaItems,
    filter,
  } = props;

  return (
    <Stack
      direction="row"
      spacing={3}
      sx={{ paddingX: "40px", alignItems: "center" }}
    >
      <Box>金額</Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        購入
        <Checkbox checked={filter.showBuyItems} onClick={toggleShowBuyItems} />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        売却
        <Checkbox
          checked={filter.showSellItems}
          onClick={toggleShowSellItems}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        草
        <Checkbox
          checked={filter.showKusaItems}
          onClick={toggleShowKusaItems}
        />
      </Box>
    </Stack>
  );
};
