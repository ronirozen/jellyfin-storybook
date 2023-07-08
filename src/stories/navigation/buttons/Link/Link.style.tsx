import { Theme, styled } from "@mui/material";

// Type
import { LinkProps } from "./Link.type";

export const StyledLink = styled("a")<LinkProps>(({ theme, color, underline = "always", variant }) => ({
  fontWeight: 600,
  lineHeight: 1.35,
  cursor: "pointer",
  textAlign: "center",
  display: "inline-flex",
  fontFamily: theme.typography.fontFamily,
  color: theme.palette[color || "primary"].main,
  textDecoration: underline === "always" ? "underline" : "none",
  fontSize: variant ? theme.typography[variant].fontSize : "inherit",

  "&:hover": {
    textDecoration: underline === "none" ? underline : "underline"
  }
}));
