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
import { FC } from "react";
import { useItemList } from "../hooks/use-item-list";
import { Item, ItemType } from "../../../types/Item";

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

function createData(item: Item) {
  return {
    name: item.name,
    itemType: itemTypeToText(item.itemType),
    buy: item.buy,
    sell: item.sell,
    state: item.state,
  };
}

export const ItemList: FC = () => {
  const { rawItemList } = useItemList();

  const rows = rawItemList.map((item) => {
    return createData(item);
  });
  return (
    <Box sx={{ margin: 5 }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>アイテム名</TableCell>
              <TableCell align="right">種別</TableCell>
              <TableCell align="right">購入</TableCell>
              <TableCell align="right">売却</TableCell>
              <TableCell align="right">状態</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.itemType}</TableCell>
                <TableCell align="right">{row.buy}</TableCell>
                <TableCell align="right">{row.sell}</TableCell>
                <TableCell align="right">{row.state}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
