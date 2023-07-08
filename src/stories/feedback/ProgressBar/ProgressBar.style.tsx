import { LinearProgress, linearProgressClasses, styled } from "@mui/material";

export const ProgressBarStyled = styled(LinearProgress)(({ theme, color = "primary" }) => ({
  height: 10,
  borderRadius: 5,
  backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],

  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: color === "inherit" ? color : theme.palette[color][theme.palette.mode]
  }
}));
