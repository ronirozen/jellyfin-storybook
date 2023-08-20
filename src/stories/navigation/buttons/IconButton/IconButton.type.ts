import { IconButtonProps as IconButtonPropsMui } from "@mui/material";

// Type
import type { Color } from "style";

export type IconButtonProps = Omit<IconButtonPropsMui, "classes" | "sx" | "color"> & {
  /**
   * The color of the element.
   * [palette customization guide](?path=/story/color-palette--color-palette).
   * @default text
   */
  color?: Exclude<Color, "primary"> | "text";
  /**
   * The color of the element when hovering over the element.
   * [palette customization guide](?path=/story/color-palette--color-palette).
   * @default text
   */
  hoverColor?: Exclude<Color, "primary"> | "text";
};
