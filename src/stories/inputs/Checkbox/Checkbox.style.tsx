import { Checkbox, FormControlLabel, styled } from "@mui/material";

// Constant
import { sizes } from "./Checkbox.constant";

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

export const StyledIcon = styled("span")<CheckboxProps>(({ theme, color = "primary", size = "md" }) => ({
  top: 3,
  left: 0,
  margin: 0,
  zIndex: 2,
  display: "flex",
  overflow: "hidden",
  width: sizes[size],
  height: sizes[size],
  alignItems: "center",
  border: "0.14em solid",
  borderRadius: "0.14em",
  "-justify-content": "center",
  "-webkit-align-items": "center",
  "-webkit-justify-content": "center",
  borderColor: theme.palette.text.primary,

  "input:focus ~ &": {
    borderColor: theme.palette[color].main
  }
}));

export const StyledCheckedIcon = styled(StyledIcon)(({ theme, color = "primary", size = "md" }) => {
  const borderColor = theme.palette.text.primary;
  const fillColor = theme.palette[color].main;

  return {
    borderColor: fillColor,
    backgroundColor: fillColor,
    backgroundImage: `linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))`,
    "&:before": {
      content: '""',
      display: "block",
      width: `calc(${sizes[size]} - 0.40em)`,
      height: `calc(${sizes[size]} - 0.40em)`,
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' viewBox='0 0 24 24' data-testid='CheckIcon'%3E%3Cpath d='M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' fill='${convertStringToEncodeURI(
        borderColor
      )}'%3E%3C/path%3E%3C/svg%3E")`
    },

    "input:focus ~ &": { borderColor }
  };
});
