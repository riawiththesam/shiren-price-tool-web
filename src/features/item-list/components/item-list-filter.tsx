import { Box, Checkbox, Stack } from "@mui/material";
import { FC } from "react";
import { ItemFilter } from "../hooks/use-item-list";

export interface ItemListSubheaderProps {
  toggleShowBuyItems: () => void;
  toggleShowSellItems: () => void;
  toggleShowKusaItems: () => void;
  toggleShowMakimonoItems: () => void;
  toggleShowTsuboItems: () => void;
  toggleShowTsueItems: () => void;
  toggleShowUdewaItems: () => void;
  filter: ItemFilter;
}

export const ItemListFilter: FC<ItemListSubheaderProps> = (props) => {
  const {
    toggleShowBuyItems,
    toggleShowSellItems,
    toggleShowKusaItems,
    toggleShowMakimonoItems,
    toggleShowTsuboItems,
    toggleShowTsueItems,
    toggleShowUdewaItems,
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
        買
        <Checkbox
          checked={filter.showBuyItems}
          onClick={toggleShowBuyItems}
          sx={{ paddingLeft: "0" }}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        売
        <Checkbox
          checked={filter.showSellItems}
          onClick={toggleShowSellItems}
          sx={{ paddingLeft: "0" }}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        草
        <Checkbox
          checked={filter.showKusaItems}
          onClick={toggleShowKusaItems}
          sx={{ paddingLeft: "0" }}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        巻
        <Checkbox
          checked={filter.showMakimonoItems}
          onClick={toggleShowMakimonoItems}
          sx={{ paddingLeft: "0" }}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        壺
        <Checkbox
          checked={filter.showTsuboItems}
          onClick={toggleShowTsuboItems}
          sx={{ paddingLeft: "0" }}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        杖
        <Checkbox
          checked={filter.showTsueItems}
          onClick={toggleShowTsueItems}
          sx={{ paddingLeft: "0" }}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        腕
        <Checkbox
          checked={filter.showUdewaItems}
          onClick={toggleShowUdewaItems}
          sx={{ paddingLeft: "0" }}
        />
      </Box>
    </Stack>
  );
};
