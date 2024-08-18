import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { FC, ReactNode } from "react";
import MakimonoIcon from "../../../assets/makimono.png";
import KusaIcon from "../../../assets/kusa.png";
import TsueIcon from "../../../assets/tsue.png";
import UdewaIcon from "../../../assets/udewa.png";
import TsuboIcon from "../../../assets/tsubo.png";
import { Item, ItemState, ItemType } from "../../../types/Item";

function itemTypeToIcon(itemType: ItemType): string {
  switch (itemType) {
    case "Makimono":
      return MakimonoIcon;
    case "Kusa":
      return KusaIcon;
    case "Udewa":
      return UdewaIcon;
    case "Tsue":
      return TsueIcon;
    case "Tsubo":
      return TsuboIcon;
  }
}

function itemTypeToText(itemType: ItemType): string {
  switch (itemType) {
    case "Makimono":
      return "巻物";
    case "Kusa":
      return "草";
    case "Udewa":
      return "腕輪";
    case "Tsue":
      return "杖";
    case "Tsubo":
      return "壺";
  }
}

function itemStateToText(itemState: ItemState): string {
  switch (itemState) {
    case "Normal":
      return "";
    case "Noroi":
      return "呪い";
    case "Shukufuku":
      return "祝福";
  }
}

function itemStateToTextColor(itemState: ItemState): string {
  switch (itemState) {
    case "Normal":
      return "inherit";
    case "Noroi":
      return "red";
    case "Shukufuku":
      return "blue";
  }
}

export interface Props {
  tablePrice: number;
  rows: Array<Item>;
  onRowClick: (item: Item) => void;
}

export const ItemListTable: FC<Props> = (props) => {
  const { tablePrice, rows, onRowClick } = props;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>アイテム名</StyledTableCell>
            <StyledTableCell align="right">種別</StyledTableCell>
            <StyledTableCell align="right">元値</StyledTableCell>
            <StyledTableCell align="right">購入</StyledTableCell>
            <StyledTableCell align="right">売却</StyledTableCell>
            <StyledTableCell align="right">状態</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
                "&:last-child td, &:last-child th": { border: 0 },
              }}
              onClick={() => {
                onRowClick(row);
              }}
            >
              <StyledTableCell>
                <Box
                  component={"span"}
                  sx={{ color: itemStateToTextColor(row.state) }}
                >
                  {row.name}
                </Box>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <img src={itemTypeToIcon(row.master.itemType)} />
                  {itemTypeToText(row.master.itemType)}
                </Box>
              </StyledTableCell>
              <StyledTableCell
                align="right"
                color={tablePrice == row.defaultBuy ? "orange" : undefined}
              >
                {row.defaultBuy}
              </StyledTableCell>
              <StyledTableCell
                align="right"
                color={tablePrice == row.buy ? "orange" : undefined}
              >
                {row.buy}
              </StyledTableCell>
              <StyledTableCell
                align="right"
                color={tablePrice == row.sell ? "orange" : undefined}
              >
                {row.sell}
              </StyledTableCell>
              <StyledTableCell align="right">
                {itemStateToText(row.state)}
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

interface StyledTableCellProps {
  align?: "right";
  children: ReactNode;
  color?: "black" | "orange";
}
const StyledTableCell: FC<StyledTableCellProps> = (props) => {
  return (
    <TableCell
      sx={{ padding: "5px", color: props.color }}
      align={props.align ?? "inherit"}
    >
      {props.children}
    </TableCell>
  );
};
