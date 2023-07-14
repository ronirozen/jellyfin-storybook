import { LinearProgress, linearProgressClasses, styled } from "@mui/material";

import { ProgressBarProps } from "./ProgressBar.type";

export const ProgressBarStyled = styled(LinearProgress)<ProgressBarProps>(({ theme, color = "primary" }) => ({
  height: 10,
  borderRadius: 5,
  backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],

  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette[color][theme.palette.mode]
  }
}));
