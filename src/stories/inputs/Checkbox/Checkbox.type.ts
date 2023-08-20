import { CheckboxProps as CheckboxPropsMui } from "@mui/material";

// Type
import { Color } from "style";

// Constant
import { sizes } from "./Checkbox.constant";

const keys = [
  "id",
  "color",
  "value",
  "checked",
  "disabled",
  "required",
  "onChange",
  "inputRef",
  "inputProps",
  "indeterminate",
  "disableRipple",
  "defaultChecked"
] as const;
type Keys = Extract<keyof CheckboxPropsMui, (typeof keys)[number]>;
export type CheckboxProps = { [K in Keys]?: CheckboxPropsMui[K] } & {
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
  label?: string;
};
