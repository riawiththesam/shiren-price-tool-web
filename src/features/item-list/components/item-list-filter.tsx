import {
  Box,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Switch,
} from "@mui/material";
import { ChangeEvent, FC } from "react";
import { ItemFilter } from "../hooks/use-item-list";
import { ItemType } from "../../../types/Item";
import { PurchaseType } from "../../../types/purchase";

export interface ItemListSubheaderProps {
  setPurchaseType: (purchaseType: PurchaseType) => void;
  setItemType: (itemType: ItemType | "All") => void;
  setEnableUnique: (enable: boolean) => void;
  filter: ItemFilter;
}

export const ItemListFilter: FC<ItemListSubheaderProps> = (props) => {
  const { setPurchaseType, setItemType, setEnableUnique, filter } = props;

  const handleOnChangeShowBuyOrSell = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setPurchaseType(event.target.value as PurchaseType);
  };

  const handleOnChangeShowItemType = (event: ChangeEvent<HTMLInputElement>) => {
    setItemType(event.target.value as ItemType | "All");
  };

  const handleOnChangeEnableUnique = (event: ChangeEvent<HTMLInputElement>) => {
    setEnableUnique(event.target.checked);
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
          control={
            <Radio checked={filter.purchaseType == "buy"} size="small" />
          }
          label="買"
        />
        <FormControlLabel
          value="sell"
          control={
            <Radio checked={filter.purchaseType == "sell"} size="small" />
          }
          label="売"
        />
      </RadioGroup>

      <Divider orientation="vertical" />

      <RadioGroup row onChange={handleOnChangeShowItemType}>
        <FormControlLabel
          value="All"
          control={
            <Radio checked={filter.showItemType == "All"} size="small" />
          }
          label="全"
        />
        <FormControlLabel
          value="Kusa"
          control={
            <Radio checked={filter.showItemType == "Kusa"} size="small" />
          }
          label="草"
        />
        <FormControlLabel
          value="Makimono"
          control={
            <Radio checked={filter.showItemType == "Makimono"} size="small" />
          }
          label="巻"
        />
        <FormControlLabel
          value="Tsubo"
          control={
            <Radio checked={filter.showItemType == "Tsubo"} size="small" />
          }
          label="壺"
        />
        <FormControlLabel
          value="Tsue"
          control={
            <Radio checked={filter.showItemType == "Tsue"} size="small" />
          }
          label="杖"
        />
        <FormControlLabel
          value="Udewa"
          control={
            <Radio checked={filter.showItemType == "Udewa"} size="small" />
          }
          label="腕"
        />
      </RadioGroup>

      <Divider orientation="vertical" />

      <FormControlLabel
        value="unique-item"
        control={
          <Switch
            onChange={handleOnChangeEnableUnique}
            checked={filter.enableUnique}
            size="small"
          />
        }
        label="特"
      />
    </Stack>
  );
};
