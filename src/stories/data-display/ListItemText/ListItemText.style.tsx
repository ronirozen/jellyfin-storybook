import { styled } from "@mui/material";

import { ListItemTextProps } from "./ListItemText.type";

export const StyledListItemText = styled("div")<ListItemTextProps>(({ theme, padding }) => ({
  padding: `${padding}px 0`
}));
