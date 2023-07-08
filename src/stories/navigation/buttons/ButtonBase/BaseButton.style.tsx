import { Button, CircularProgress, styled } from "@mui/material";

import { BaseButtonProps } from "./BaseButton.type";

export const StyledBaseButton = styled(Button)<BaseButtonProps>(({ theme, color = "primary" }) => ({
  color: theme.palette[color].contrastText
}));

export const StyledChildrenHidden = styled("span")(() => ({ color: "transparent" }));
export const StyledCircularProgress = styled(CircularProgress)(() => ({ position: "absolute" }));
