import { Box, Checkbox, Stack } from "@mui/material";
import { FC } from "react";

export interface ItemListSubheaderProps {
  showBuyItems: boolean;
  toggleShowBuyItems: () => void;
  showSellItems: boolean;
  toggleShowSellItems: () => void;
}

export const ItemListFilter: FC<ItemListSubheaderProps> = (props) => {
  const {
    showBuyItems,
    toggleShowBuyItems,
    showSellItems,
    toggleShowSellItems,
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
        <Checkbox checked={showBuyItems} onClick={toggleShowBuyItems} />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        売却
        <Checkbox checked={showSellItems} onClick={toggleShowSellItems} />
      </Box>
    </Stack>
  );
};
