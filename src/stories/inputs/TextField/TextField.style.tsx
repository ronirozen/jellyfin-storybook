import { styled, TextField, InputLabel, FormHelperText, InputLabelProps } from "@mui/material";

import { TextFieldProps } from "./TextField.type";

export const StyledRoot = styled("div")<{ fullWidth?: boolean }>(({ theme, fullWidth }) => ({
  color: theme.palette.text.primary,
  ...(fullWidth ? { width: "100%" } : {})
}));

export const StyledTextField = styled(TextField)<TextFieldProps & { bgColor: TextFieldProps["color"] }>(
  ({ theme, color = "primary", bgColor = "inherit", size }) => ({
    borderRadius: "0.2em",
    backgroundColor: bgColor === "inherit" ? "inherit" : theme.palette[bgColor].main,

    "& fieldset": {
      border: "none"
    },

    "& input": {
      borderRadius: "0.2em",
      padding: `${size == "small" ? 6.5 : 14.5}px 14px`,
      border:
        bgColor === "inherit"
          ? `0.16em solid ${theme.palette[color].main}`
          : `0.16em solid ${theme.palette[bgColor].main}`,
      ":focus": {
        borderColor: theme.palette[color].main
      }
    }
  })
);

export const StyledInputLabel = styled(InputLabel)<InputLabelProps & { padding: number }>(
  ({ theme, padding }) => ({
    paddingLeft: padding,
    marginBottom: "0.25em",
    ...theme.typography.caption,
    color: theme.palette.text.primary
  })
);

export const StyledTextFieldWithAdornment = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center"
}));

export const StyledFormHelperText = styled(FormHelperText)(({ theme }) => ({
  marginTop: "0.25em",
  paddingLeft: "0.15em"
}));
