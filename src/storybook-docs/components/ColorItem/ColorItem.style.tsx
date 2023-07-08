import { Grid, styled } from "@mui/material";

export const Color = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& div:first-of-type": {
    width: 40,
    height: 40,
    marginRight: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: "inset 0 2px 4px 0 rgba(0, 0, 0, .06)"
  }
}));
