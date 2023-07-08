import { CheckboxProps as CheckboxPropsMui, Palette } from "@mui/material";

// Type
import { Color } from "style";

const keys = [
  "id",
  "size",
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
   * [palette customization guide](?path=/story/style--color-palette).
   * @default primary
   */
  color?: Color;
  label?: string;
};
