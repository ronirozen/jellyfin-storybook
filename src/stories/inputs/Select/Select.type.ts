import { OutlinedTextFieldProps } from "@mui/material";

// Type
import { TextFieldProps } from "../TextField";

export type SelectProps = TextFieldProps & {
  SelectProps?: OutlinedTextFieldProps["SelectProps"];
  options: { label: string; value: string | number }[];
};
