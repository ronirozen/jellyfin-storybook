import { ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {}

  interface TypeText {
    main: string;
  }

  interface ThemeOptions {}
}

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    text: true;
  }
}
declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsColorOverrides {
    text: true;
  }
}
