import { TypographyProps as TypographyPropsMui } from "@mui/material";

import { TextColor } from "style";

export type TypographyProps = Omit<TypographyPropsMui, "sx" | "classes" | "color"> & {
  color?: TextColor;
};
