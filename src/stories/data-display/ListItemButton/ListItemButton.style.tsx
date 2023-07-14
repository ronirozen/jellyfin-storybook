import { ListItemButton, styled } from "@mui/material";

import { ListItemButtonProps } from "./ListItemButton.type";

export const StyledListItemButton = styled(ListItemButton)<ListItemButtonProps>(
  ({ theme, color = "primary" }) => ({
    "&:hover": {
      backgroundColor: theme.palette[color][theme.palette.mode]
    }
  })
);
