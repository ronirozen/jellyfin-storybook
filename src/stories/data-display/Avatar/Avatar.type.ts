import { AvatarProps as AvatarPropsMui } from "@mui/material";

import { Color } from "style";
import { sizes } from "./Avatar.style";

export type AvatarProps = Omit<AvatarPropsMui, "sx" | "classes" | "color"> & {
  /**
   * The color of the component.
   * [palette customization guide](?path=/story/style--color-palette).
   * @default primary
   */
  color?: Color;
  size?: keyof typeof sizes;
};
