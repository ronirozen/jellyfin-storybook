import { ReactRenderer } from "@storybook/react";
import { DecoratorFunction } from "@storybook/types";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import { DEFAULT_THEME, DEFAULT_DARK_THEME, DEFAULT_LIGHT_THEME, DEFAULT_MODE_THEME } from "style";

const components_dark = {
  MuiCssBaseline: {
    styleOverrides: {
      body: {
        backgroundColor: "#101010"
      },
      "& .docs-story": {
        backgroundColor: "#101010"
      }
    }
  }
};

const components_light = {
  MuiCssBaseline: {
    styleOverrides: {
      "& .docs-story": {
        backgroundColor: "#ffffff"
      }
    }
  }
};

export const themeProviderDecorators: DecoratorFunction<ReactRenderer, { [x: string]: any }> =
  withThemeFromJSXProvider({
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
    defaultTheme: DEFAULT_MODE_THEME,
    themes: {
      dark: createTheme({ ...DEFAULT_THEME, ...DEFAULT_DARK_THEME, components: components_dark }),
      light: createTheme({ ...DEFAULT_THEME, ...DEFAULT_LIGHT_THEME, components: components_light })
    }
  });
