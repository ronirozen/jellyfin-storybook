import { OutlinedTextFieldProps } from "@mui/material";

import { TextFieldProps } from "../TextField";

export type SelectProps = TextFieldProps & {
  SelectProps?: OutlinedTextFieldProps["SelectProps"];
  options: { label: string; value: string | number }[];
};
