import { ThemeOptions } from "@mui/material/styles";

export const DEFAULT_MODE_THEME = "dark";
export const DEFAULT_DARK_THEME: ThemeOptions = {
  palette: {
    primary: {
      main: "#303030",
      dark: "#202020",
      light: "#404040"
    },
    background: {
      paper: "#101010"
    },
    text: {
      primary: "#ffffffcc",
      secondary: "#ffffff80"
    },
    action: {
      hover: "#00a4dc"
    },
    mode: "dark"
  }
};

export const DEFAULT_LIGHT_THEME: ThemeOptions = {};

export const DEFAULT_THEME: ThemeOptions = {
  palette: {
    info: {
      main: "#00a4dc"
    }
  },
  typography: {
    caption: {
      fontSize: "93%",
      lineHeight: 1.35
    },
    fontFamily: "Noto Sans,Noto Sans HK,Noto Sans JP,Noto Sans KR,Noto Sans SC,Noto Sans TC,sans-serif"
  },
  spacing: [0, 4, 8, 16, 32, 64]
};

export const textColors = ["primary", "secondary"] as const;
export const colors = ["primary", "secondary", "error", "info", "success", "warning"] as const;
