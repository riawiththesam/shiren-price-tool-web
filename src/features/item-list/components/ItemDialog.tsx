import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { FC } from "react";
import { Item } from "../../../types/Item";

export interface Props {
  isOpened: boolean;
  item: Item | null;
  handleClose: () => void;
}

export const ItemDialog: FC<Props> = (props) => {
  const { isOpened, item, handleClose } = props;

  if (item == null) return null;

  return (
    <Dialog
      open={isOpened}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description-item-type alert-dialog-description-buy alert-dialog-description-sell alert-dialog-description-default-buy alert-dialog-description-default-sell alert-dialog-description-item-state"
    >
      <DialogTitle id="alert-dialog-title">{`${item.name}`}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description-item-type">
          {`種別: ${item.itemType}`}
        </DialogContentText>
        <DialogContentText id="alert-dialog-description-buy">
          {`購入: ${item.buy}`}
        </DialogContentText>
        <DialogContentText id="alert-dialog-description-sell">
          {`売却: ${item.sell}`}
        </DialogContentText>
        <DialogContentText id="alert-dialog-description-default-buy">
          {`定価購入: ${item.defaultBuy}`}
        </DialogContentText>
        <DialogContentText id="alert-dialog-description-default-sell">
          {`定価売却: ${item.defaultSell}`}
        </DialogContentText>
        <DialogContentText id="alert-dialog-description-item-state">
          {`状態: ${item.state} / ${item.possibleStates}`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          閉じる
        </Button>
      </DialogActions>
    </Dialog>
  );
};
