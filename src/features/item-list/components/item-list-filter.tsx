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
      <Box sx={{ display: "flex", alignItems: "center" }}>
        巻
        <Checkbox
          checked={filter.showMakimonoItems}
          onClick={toggleShowMakimonoItems}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        壺
        <Checkbox
          checked={filter.showTsuboItems}
          onClick={toggleShowTsuboItems}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        杖
        <Checkbox
          checked={filter.showTsueItems}
          onClick={toggleShowTsueItems}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        腕
        <Checkbox
          checked={filter.showUdewaItems}
          onClick={toggleShowUdewaItems}
        />
      </Box>
    </Stack>
  );
};
