import {
  Box,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import { ChangeEvent, FC } from "react";
import { ItemFilter } from "../hooks/use-item-list";
import { ItemType } from "../../../types/Item";
import { PurchaseType } from "../../../types/purchase";

export interface ItemListSubheaderProps {
  setPurchaseType: (purchaseType: PurchaseType) => void;
  setItemType: (itemType: ItemType) => void;
  filter: ItemFilter;
}

export const ItemListFilter: FC<ItemListSubheaderProps> = (props) => {
  const { setPurchaseType, setItemType, filter } = props;

  const handleOnChangeShowBuyOrSell = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setPurchaseType(event.target.value as PurchaseType);
  };

  const handleOnChangeShowItemType = (event: ChangeEvent<HTMLInputElement>) => {
    setItemType(event.target.value as ItemType);
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ paddingX: "40px", alignItems: "center" }}
    >
      <Box>金額</Box>

      <Divider orientation="vertical" />

      <RadioGroup row onChange={handleOnChangeShowBuyOrSell}>
        <FormControlLabel
          value="buy"
          control={<Radio checked={filter.showBuyOrSellItems == "buy"} />}
          label="買"
        />
        <FormControlLabel
          value="sell"
          control={<Radio checked={filter.showBuyOrSellItems == "sell"} />}
          label="売"
        />
      </RadioGroup>

      <Divider orientation="vertical" />

      <RadioGroup row onChange={handleOnChangeShowItemType}>
        <FormControlLabel
          value="Kusa"
          control={<Radio checked={filter.showItemType == "Kusa"} />}
          label="草"
        />
        <FormControlLabel
          value="Makimono"
          control={<Radio checked={filter.showItemType == "Makimono"} />}
          label="巻"
        />
        <FormControlLabel
          value="Tsubo"
          control={<Radio checked={filter.showItemType == "Tsubo"} />}
          label="壺"
        />
        <FormControlLabel
          value="Tsue"
          control={<Radio checked={filter.showItemType == "Tsue"} />}
          label="杖"
        />
        <FormControlLabel
          value="Udewa"
          control={<Radio checked={filter.showItemType == "Udewa"} />}
          label="腕"
        />
      </RadioGroup>
    </Stack>
  );
};
