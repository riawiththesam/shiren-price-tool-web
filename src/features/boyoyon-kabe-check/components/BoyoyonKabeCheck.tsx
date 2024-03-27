import {
  Box,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableRow,
} from "@mui/material";
import { FC, useState } from "react";
import { SquareTableCell } from "./SquareTableCell";
import { SizeChangeButtons } from "./SizeChangeButtons";

function chipToColor(chip: 0 | 1): string {
  switch (chip) {
    case 0:
      return "white";
    case 1:
      return "blue";
  }
}

export const BoyoyonKabeCheck: FC = () => {
  const [roomHeight, setRoomHeight] = useState(10);
  const [roomWidth, setRoomWidth] = useState(10);

  const rows: Array<Array<0 | 1>> = [
    [1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1],
  ];

  const onClickHorizontalAdd = () => {
    setRoomWidth(roomWidth + 1);
  };

  const onClickHorizontalRemove = () => {
    setRoomWidth(Math.max(roomWidth - 1, 0));
  };

  const onClickVerticalAdd = () => {
    setRoomHeight(roomHeight + 1);
  };

  const onClickVerticalRemove = () => {
    setRoomHeight(Math.max(roomHeight - 1, 0));
  };

  return (
    <Stack sx={{ maxWidth: "500px" }}>
      <TableContainer>
        <Table
          sx={{
            display: "flex",
            boxSizing: "border-box",
          }}
        >
          <TableBody sx={{ width: "100%" }}>
            <TableRow sx={{ display: "flex" }}>
              <SquareTableCell text="-" />
              {rows[0].map((_, xIndex) => (
                <SquareTableCell key={xIndex} text={xIndex.toString()} />
              ))}
            </TableRow>
            {rows.map((row, yIndex) => (
              <TableRow key={yIndex} sx={{ display: "flex" }}>
                <SquareTableCell text={yIndex.toString()} />
                {row.map((chip, xIndex) => (
                  <SquareTableCell
                    key={xIndex}
                    text={chip.toString()}
                    backgroundColor={chipToColor(chip)}
                  />
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Stack direction="row" sx={{ justifyContent: "flex-end" }}>
        <Box>{roomWidth}</Box>
        <SizeChangeButtons
          onClickAdd={onClickHorizontalAdd}
          onClickRemove={onClickHorizontalRemove}
        />
        <Box>x{roomHeight}</Box>
        <SizeChangeButtons
          onClickAdd={onClickVerticalAdd}
          onClickRemove={onClickVerticalRemove}
        />
      </Stack>
    </Stack>
  );
};
