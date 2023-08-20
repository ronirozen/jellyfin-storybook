import { OutlinedTextFieldProps } from "@mui/material";

// Type
import { Color } from "style";

// Constant
import { sizes } from "./TextField.constant";

const keys = [
  "id",
  "rows",
  "type",
  "name",
  "label",
  "value",
  "margin",
  "maxRows",
  "minRows",
  "required",
  "onChange",
  "fullWidth",
  "multiline",
  "inputProps",
  "helperText",
  "placeholder",
  "defaultValue"
] as const;
type Keys = Extract<keyof OutlinedTextFieldProps, (typeof keys)[number]>;

export type TextFieldProps = { [K in Keys]?: OutlinedTextFieldProps[K] } & {
  /**
   * The outline color of the element.
   * [palette customization guide](?path=/story/color-palette--color-palette).
   * @default primary
   */
  outlineColor?: Color;
  /**
   * The background color of the element.
   * [palette customization guide](?path=/story/color-palette--color-palette).
   * @default inherit
   */
  color?: Color | "inherit";
  /**
   * The size of the component.
   * @default md
   */
  size?: keyof typeof sizes;
  EndAdornment?: JSX.Element | string;
  StartAdornment?: JSX.Element | string;
};
