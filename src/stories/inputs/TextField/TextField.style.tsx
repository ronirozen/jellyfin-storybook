import { styled, TextField, InputLabel, FormHelperText, InputLabelProps, Theme } from "@mui/material";

// Constant
import { sizes } from "./TextField.constant";

// Type
import { TextFieldProps } from "./TextField.type";

export const StyledRoot = styled("div")<{ fullWidth?: boolean }>(({ theme, fullWidth }) => ({
  color: theme.palette.text.primary,
  ...(fullWidth ? { width: "100%" } : {})
}));

export const StyledTextField = styled(TextField, { shouldForwardProp: propName => propName !== "bgColor" })(
  ({
    theme,
    size = "md",
    color = "primary",
    bgColor = "primary"
  }: TextFieldProps & {
    theme: Theme;
    bgColor: TextFieldProps["color"];
    color: TextFieldProps["outlineColor"];
  }) => ({
    borderRadius: "0.2em",
    backgroundColor: bgColor === "inherit" ? "inherit" : theme.palette[bgColor].main,

    "& fieldset": {
      border: "none"
    },

    "& input": {
      color: "black",
      borderRadius: "0.2em",
      padding: `${sizes[size]}px 14px`,
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

export const StyledTextFieldWithAdornment = styled("div")(({}) => ({
  display: "flex",
  alignItems: "center"
}));

export const StyledFormHelperText = styled(FormHelperText)(({}) => ({
  marginTop: "0.25em",
  paddingLeft: "0.15em"
}));
