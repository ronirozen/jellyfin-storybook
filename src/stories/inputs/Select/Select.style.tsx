import { styled } from "@mui/material";
import { PropsWithChildren } from "react";

import { TextField } from "../TextField";
import { SelectProps } from "./Select.type";

export const StyledSelect = styled(TextField)<
  Omit<PropsWithChildren<SelectProps>, "options"> & { select: boolean }
>(({ theme, size, color = "primary", outlineColor = color }) => ({
  "& fieldset": {
    border: "none"
  },

  "& select": {
    appearance: "none",
    borderRadius: "0.2em",
    padding: `${size == "small" ? 6.5 : 14.5}px 14px`,
    border: `0.16em solid ${theme.palette[color].main}`,
    ":focus": {
      borderColor: theme.palette[outlineColor].main
    }
  },

  "& .MuiNativeSelect-select": {
    "& option": {
      backgroundColor: `${theme.palette[color].main} !important`
    }
  }
}));
