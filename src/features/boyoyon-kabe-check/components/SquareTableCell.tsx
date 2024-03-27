import { TableCell } from "@mui/material";
import { FC } from "react";

export interface SquareTableCellProps {
  text: string;
  backgroundColor?: string;
}

export const SquareTableCell: FC<SquareTableCellProps> = (props) => {
  const { text, backgroundColor } = props;

  return (
    <TableCell
      sx={{
        padding: 0,
        flex: 1,
        border: "solid 1px",
        aspectRatio: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: backgroundColor ? backgroundColor : "white",
      }}
    >
      <div>{text}</div>
    </TableCell>
  );
};
