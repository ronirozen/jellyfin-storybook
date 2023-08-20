import { FC } from "react";
import { useDarkMode } from "storybook-dark-mode";
import { SyntaxHighlighterProps } from "@storybook/components";
import { StyledSyntaxHighlighter } from "./SyntaxHighlighter.style";
import { ThemeProvider, convert, themes } from "@storybook/theming";

export const SyntaxHighlighter: FC<SyntaxHighlighterProps & { dark?: boolean }> = ({
  dark,
  ...restProps
}) => {
  const isDark = dark ?? useDarkMode();
  const overrideTheme = isDark ? themes.dark : themes.light;

  return (
    <ThemeProvider theme={convert(overrideTheme)}>
      <StyledSyntaxHighlighter {...restProps} />
    </ThemeProvider>
  );
};
