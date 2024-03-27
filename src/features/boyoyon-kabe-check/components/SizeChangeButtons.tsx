import { Button, Stack } from "@mui/material";
import { FC } from "react";

export interface SizeChangeButtonsProps {
  onClickAdd: () => void;
  onClickRemove: () => void;
}

export const SizeChangeButtons: FC<SizeChangeButtonsProps> = (props) => {
  const { onClickAdd, onClickRemove } = props;

  return (
    <Stack sx={{ height: "10px" }}>
      <Button
        sx={{ height: "5px", width: "20px", minWidth: 0 }}
        variant="outlined"
        onClick={onClickAdd}
      >
        +
      </Button>
      <Button
        sx={{ height: "5px", width: "20px", minWidth: 0 }}
        variant="outlined"
        onClick={onClickRemove}
      >
        -
      </Button>
    </Stack>
  );
};
