import { SyntaxHighlighter } from "@storybook/components";
import { styled, ignoreSsrWarning } from "@storybook/theming";

export const StyledSyntaxHighlighter = styled(SyntaxHighlighter)(({ theme }) => ({
  lineHeight: "19px",
  borderRadius: theme.appBorderRadius,
  fontSize: `${theme.typography.size.s2 - 1}px`,
  boxShadow: theme.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
  "pre.prismjs": {
    padding: 20,
    background: "inherit"
  }
}));

export const SourceSkeletonWrapper = styled.div(({ theme }) => ({
  margin: "25px 0 40px",
  padding: "20px 20px 20px 22px",
  borderRadius: theme.appBorderRadius,
  background: theme.background.content,
  border: `1px solid ${theme.appBorderColor}`,
  boxShadow: theme.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0"
}));

export const SourceSkeletonPlaceholder = styled.div(({ theme }) => ({
  height: 17,
  marginTop: 1,
  width: "60%",
  background: theme.appBorderColor,
  animation: `${theme.animation.glow} 1.5s ease-in-out infinite`,

  [`&:first-child${ignoreSsrWarning}`]: {
    margin: 0
  }
}));
