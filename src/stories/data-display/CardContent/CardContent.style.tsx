import { styled } from "@mui/material";

import { CardContentProps } from "./CardContent.type";

export const CardContentStyled = styled("div")<CardContentProps>(({}) => ({
  zIndex: 1,
  position: "relative"
}));
