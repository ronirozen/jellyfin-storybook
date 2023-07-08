import { styled } from "@mui/material";

import { BaseButton } from "../ButtonBase";
import { ButtonProps } from "./Button.type";

export const StyledButton = styled(BaseButton)<ButtonProps>(({ fullWidth }) => {
  return {
    ...(fullWidth ? { width: "100%" } : {})
  };
});
