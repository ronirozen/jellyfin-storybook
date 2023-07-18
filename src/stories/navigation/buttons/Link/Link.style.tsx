import { styled } from "@mui/material";

// Type
import { LinkProps } from "./Link.type";

export const StyledLink = styled("a")<LinkProps>(
  ({ theme, color = "text", underline = "always", variant }) => ({
    fontWeight: 600,
    lineHeight: 1.35,
    cursor: "pointer",
    textAlign: "center",
    display: "inline-flex",
    fontFamily: theme.typography.fontFamily,
    textDecoration: underline === "always" ? "underline" : "none",
    fontSize: variant ? theme.typography[variant].fontSize : "inherit",
    color: color === "text" ? theme.palette.text.primary : theme.palette[color].main,

    "&:hover": {
      textDecoration: underline === "none" ? underline : "underline"
    }
  })
);
