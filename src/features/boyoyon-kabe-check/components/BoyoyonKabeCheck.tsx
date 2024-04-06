import {
  Box,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableRow,
} from "@mui/material";
import { FC } from "react";
import { SquareTableCell } from "./SquareTableCell";
import { SizeChangeButtons } from "./SizeChangeButtons";
import { useBoyoyonKabeCheck } from "../hooks/use-boyoyon-kabe-check";

function chipToColor(chip: 0 | 1): string {
  switch (chip) {
    case 0:
      return "white";
    case 1:
      return "blue";
  }
}

export const BoyoyonKabeCheck: FC = () => {
  const {
    roomHeight,
    roomWidth,
    roomMap,
    onClickHorizontalAdd,
    onClickHorizontalRemove,
    onClickVerticalAdd,
    onClickVerticalRemove,
  } = useBoyoyonKabeCheck();

  return (
    <Stack>
      <Stack direction="row">
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

      <TableContainer sx={{ maxWidth: "500px", maxHeight: "500px" }}>
        <Table
          sx={{
            display: "flex",
            boxSizing: "border-box",
          }}
        >
          <TableBody sx={{ width: "100%" }}>
            <TableRow sx={{ display: "flex" }}>
              <SquareTableCell text="-" />
              {roomMap[0].map((_, xIndex) => (
                <SquareTableCell key={xIndex} text={xIndex.toString()} />
              ))}
            </TableRow>
            {roomMap.map((row, yIndex) => (
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
    </Stack>
  );
};
