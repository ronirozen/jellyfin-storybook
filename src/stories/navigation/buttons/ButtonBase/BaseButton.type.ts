import { ButtonProps } from "@mui/material";
import { Color } from "style";

export type BaseButtonProps = Omit<ButtonProps, "classes" | "sx" | "color"> & {
  /**
   * The color of the component.
   * [palette customization guide](?path=/story/color-palette--color-palette).
   * @default primary
   */
  color?: Color;
  loading?: boolean;
};
