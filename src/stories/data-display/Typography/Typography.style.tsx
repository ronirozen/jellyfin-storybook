import { Typography, styled } from "@mui/material";

// Type
import { TypographyProps } from "./Typography.type";

export const StyledTypography = styled(Typography)<TypographyProps>(({ theme, color }) => ({
  color: theme.palette.text[color || "primary"]
}));
