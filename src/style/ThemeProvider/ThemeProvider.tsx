import { deepmerge } from "@mui/utils";
import { ThemeProvider as ThemeProviderMui, createTheme } from "@mui/material/styles";

// Constant
import { DEFAULT_THEME } from "./theme.constant";

// Type
import { ThemeProviderProps } from "./ThemeProvider.type";

export const ThemeProvider = ({ theme: themeOption, children }: ThemeProviderProps) => {
  const theme = createTheme(deepmerge(DEFAULT_THEME, themeOption));
  return <ThemeProviderMui theme={theme}>{children}</ThemeProviderMui>;
};
