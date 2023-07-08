import { styled } from "@mui/material";

import { ListItemActionProps } from "./ListItemAction.type";

export const StyledListItemAction = styled("div")<ListItemActionProps>(({ theme }) => ({
  marginRight: 0,
  marginLeft: "auto"
}));
