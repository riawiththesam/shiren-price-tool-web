import {
  Box,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Switch,
  styled,
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
      spacing={{ xs: 1, sm: 2 }}
      sx={{ paddingX: { xs: "10px", sm: "40px" }, alignItems: "center" }}
    >
      <Box>金額</Box>

      <Divider orientation="vertical" />

      <RadioGroup row onChange={handleOnChangeShowBuyOrSell}>
        <StyledRadioFormControlLabel
          value="buy"
          control={
            <Radio checked={filter.purchaseType == "buy"} size="small" />
          }
          label="買"
        />
        <StyledRadioFormControlLabel
          value="sell"
          control={
            <Radio checked={filter.purchaseType == "sell"} size="small" />
          }
          label="売"
        />
      </RadioGroup>

      <Divider orientation="vertical" />

      <RadioGroup row onChange={handleOnChangeShowItemType}>
        <StyledRadioFormControlLabel
          value="All"
          control={
            <Radio checked={filter.showItemType == "All"} size="small" />
          }
          label="全"
        />
        <StyledRadioFormControlLabel
          value="Kusa"
          control={
            <Radio checked={filter.showItemType == "Kusa"} size="small" />
          }
          label="草"
        />
        <StyledRadioFormControlLabel
          value="Makimono"
          control={
            <Radio checked={filter.showItemType == "Makimono"} size="small" />
          }
          label="巻"
        />
        <StyledRadioFormControlLabel
          value="Tsubo"
          control={
            <Radio checked={filter.showItemType == "Tsubo"} size="small" />
          }
          label="壺"
        />
        <StyledRadioFormControlLabel
          value="Tsue"
          control={
            <Radio checked={filter.showItemType == "Tsue"} size="small" />
          }
          label="杖"
        />
        <StyledRadioFormControlLabel
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

/**
 * ラジオボタンとラベルの間隔を狭めたフォーム
 */
const StyledRadioFormControlLabel = styled(FormControlLabel)(() => ({
  "&>.MuiFormControlLabel-label": {
    position: "relative",
    left: "-5px",
  },
}));
