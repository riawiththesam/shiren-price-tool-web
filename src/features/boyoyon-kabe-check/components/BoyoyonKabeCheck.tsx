import { Table, TableBody, TableContainer, TableRow } from "@mui/material";
import { FC } from "react";
import { SquareTableCell } from "./SquareTableCell";

function chipToColor(chip: 0 | 1): string {
  switch (chip) {
    case 0:
      return "white";
    case 1:
      return "blue";
  }
}

export const BoyoyonKabeCheck: FC = () => {
  const rows: Array<Array<0 | 1>> = [
    [1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1],
  ];

  return (
    <TableContainer>
      <Table
        sx={{
          display: "flex",
          maxWidth: "500px",
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
  );
};
