import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Box,
  Collapse,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import Fade from "@mui/material/Fade";
import { FC } from "react";
import { ItemListTable } from "./item-list-table";
import { ItemGroup } from "../hooks/use-item-list";
import { ItemDialog } from "./ItemDialog";
import { useCollapsibleListItem } from "../hooks/use-collapsible-list-item";

interface CollapsibleListItemProps {
  itemGroup: ItemGroup;
}

export const CollapsibleListItem: FC<CollapsibleListItemProps> = (props) => {
  const { itemGroup } = props;
  const { state, setOpened, close, setTableOpened } =
    useCollapsibleListItem(itemGroup);

  const onClickButton = () => {
    setTableOpened(!state.tableOpened);
  };

  return (
    <ListItem sx={{ flexFlow: "column", alignItems: "stretch" }}>
      <ListItemButton onClick={onClickButton}>
        <ListItemText
          primary={itemGroup.value}
          sx={{ flexGrow: 0, flexShrink: 0 }}
        />
        <Typography
          variant="subtitle2"
          sx={{
            flexGrow: 1,
            paddingLeft: "20px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            // 子要素の最初の要素以外の要素全ての前方に"/"を追加
            "& > *:not(:first-of-type):before": {
              content: '"/"',
            },
            "& > *": {
              "&.Noroi": {
                color: "red",
              },
              "&.Shukufuku": {
                color: "blue",
              },
            },
          }}
        >
          {itemGroup.itemList.map((item, i) => (
            <Box key={i} component="span" className={item.state}>
              {item.shortName}
            </Box>
          ))}
        </Typography>
        <Box sx={{ position: "relative" }}>
          <Fade in={state.tableOpened}>
            <RemoveIcon
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                transform: "translate(-50%, -50%)",
              }}
            />
          </Fade>
          <Fade in={!state.tableOpened}>
            <AddIcon
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                transform: "translate(-50%, -50%)",
              }}
            />
          </Fade>
        </Box>
      </ListItemButton>
      <Collapse
        in={state.tableOpened}
        timeout={200}
        unmountOnExit
        sx={{ paddingLeft: { xs: "0px", sm: "20px" } }}
      >
        <ItemListTable
          tablePrice={Number.parseInt(itemGroup.value)}
          rows={itemGroup.itemList}
          onRowClick={setOpened}
        />
      </Collapse>
      <ItemDialog
        isOpened={state.isOpened}
        item={state.item}
        handleClose={close}
      />
    </ListItem>
  );
};
