import { styled } from "@storybook/theming";
import { SyntaxHighlighter } from "@storybook/components";

export const StyledSyntaxHighlighter = styled(SyntaxHighlighter)(({ theme }) => ({
  lineHeight: "19px",
  borderRadius: theme.appBorderRadius,
  fontSize: theme.typography ? `${theme.typography?.size?.s2 - 1}px` : "",
  boxShadow: theme.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
  "pre.prismjs": {
    padding: 20,
    background: "inherit"
  }
}));
