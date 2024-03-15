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
import TsueIcon from "../../../assets/tsue.png";

interface Row {
  name: string;
  itemType: string;
  buy: number;
  sell: number;
  state: string;
}

export interface ItemListTableProps {
  rows: Array<Row>;
}

export const ItemListTable: FC<ItemListTableProps> = (props) => {
  const { rows } = props;
  return (
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
              <TableCell align="right">
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <img src={TsueIcon} />
                  {row.itemType}
                </Box>
              </TableCell>
              <TableCell align="right">{row.buy}</TableCell>
              <TableCell align="right">{row.sell}</TableCell>
              <TableCell align="right">{row.state}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
