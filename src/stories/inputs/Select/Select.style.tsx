import { styled } from "@mui/material";
import { PropsWithChildren } from "react";

import { TextField } from "../TextField";
import { SelectProps } from "./Select.type";
import { sizes } from "../TextField/TextField.constant";

export const StyledSelect = styled(TextField)<
  Omit<PropsWithChildren<SelectProps>, "options"> & { select: boolean }
>(({ theme, size = "md", color = "primary", outlineColor = "primary" }) => ({
  "& fieldset": {
    border: "none"
  },

  "& select": {
    appearance: "none",
    borderRadius: "0.2em",
    padding: `${sizes[size]}px 14px`,
    border: `0.16em solid ${
      color === "inherit" ? theme.palette[outlineColor].main : theme.palette[color].main
    }`,
    ":focus": {
      borderColor: theme.palette[outlineColor].main
    }
  },

  "& .MuiNativeSelect-select": {
    "& option": {
      backgroundColor: `${
        color === "inherit" ? theme.palette.background.paper : theme.palette[color].main
      } !important`
    }
  }
}));
