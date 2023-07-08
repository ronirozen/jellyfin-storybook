import { OutlinedTextFieldProps } from "@mui/material";

// Type
import { Color } from "style";

const keys = [
  "id",
  "rows",
  "size",
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
   * [palette customization guide](?path=/story/style--color-palette).
   * @default primary
   */
  outlineColor?: Color;
  /**
   * The background color of the element.
   * [palette customization guide](?path=/story/style--color-palette).
   * @default inherit
   */
  color?: Color | "inherit";
  EndAdornment?: JSX.Element | string;
  StartAdornment?: JSX.Element | string;
};
