import { deepmerge } from "@mui/utils";
import { createTheme } from "@mui/material";
import { useGlobals } from "@storybook/addons";

import { DEFAULT_DARK_THEME, DEFAULT_LIGHT_THEME, DEFAULT_MODE_THEME, DEFAULT_THEME } from "style";

export const useTheme = () => {
  const [{ theme }] = useGlobals();

  return createTheme(
    createTheme(
      deepmerge(
        DEFAULT_THEME,
        (theme || DEFAULT_MODE_THEME) === "dark" ? DEFAULT_DARK_THEME : DEFAULT_LIGHT_THEME
      )
    )
  );
};
