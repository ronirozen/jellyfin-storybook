import { styled } from "@mui/material";

import { CardProps } from "./Card.type";

export const CardStyled = styled("div")<CardProps>(({ theme, width, orientation, bgColor }) => ({
  width,
  contain: "strict",
  position: "relative",
  paddingBottom: orientation === "horizontal" ? "56.25%" : "140%",
  backgroundColor: theme.palette[bgColor || "primary"][theme.palette.mode]
}));
