import { IconButtonProps as IconButtonPropsMui } from "@mui/material";

// Type
import type { Color } from "style";

export type IconButtonProps = Omit<IconButtonPropsMui, "classes" | "sx" | "color"> & {
  /**
   * The color of the element.
   * [palette customization guide](?path=/story/style--color-palette).
   * @default primary
   */
  color?: Color | "text";
  /**
   * The color of the element when hovering over the element.
   * [palette customization guide](?path=/story/style--color-palette).
   * @default primary
   */
  hoverColor?: Color | "text";
};
