import { AvatarProps as AvatarPropsMui } from "@mui/material";

// Type
import { Color } from "style";

// Constant
import { sizes } from "./Avatar.constant";

export type AvatarProps = Omit<AvatarPropsMui, "sx" | "classes" | "color"> & {
  /**
   * The color of the component.
   * [palette customization guide](?path=/story/color-palette--color-palette).
   * @default primary
   */
  color?: Color;
  /**
   * The size of the component.
   * @default md
   */
  size?: keyof typeof sizes;
};
