import { Checkbox, FormControlLabel, styled } from "@mui/material";

// Type
import { CheckboxProps } from "./Checkbox.type";

// Utils
import { convertStringToEncodeURI } from "utils";

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  color: theme.palette.text.primary
}));

export const StyledCheckbox = styled(Checkbox)<CheckboxProps>(({ theme }) => ({
  color: theme.palette.text.primary
}));

export const StyledIcon = styled("span")<CheckboxProps>(({ theme, color, size }) => ({
  top: 3,
  left: 0,
  margin: 0,
  zIndex: 2,
  display: "flex",
  overflow: "hidden",
  alignItems: "center",
  border: "0.14em solid",
  borderRadius: "0.14em",
  "-justify-content": "center",
  "-webkit-align-items": "center",
  "-webkit-justify-content": "center",
  borderColor: theme.palette.text.primary,
  width: size === "medium" ? "1.45em" : "1.15em",
  height: size === "medium" ? "1.45em" : "1.15em",

  "input:focus ~ &": {
    borderColor: theme.palette[color || "primary"].main
  }
}));

export const StyledCheckedIcon = styled(StyledIcon)(({ theme, color, size }) => {
  const borderColor = theme.palette.text.primary;
  const fillColor = theme.palette[color || "primary"].main;

  return {
    borderColor: fillColor,
    backgroundColor: fillColor,
    backgroundImage: `linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))`,
    "&:before": {
      content: '""',
      display: "block",
      width: size === "medium" ? "1.45em" : "1.15em",
      height: size === "medium" ? "1.35em" : "1.05em",
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29" +
        `.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='${convertStringToEncodeURI(
          borderColor
        )}'/%3E%3C/svg%3E\")`
    },

    "input:focus ~ &": { borderColor }
  };
});
