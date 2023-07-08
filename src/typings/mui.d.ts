import { ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {}

  interface TypeText {
    main: string;
  }

  // interface PaletteOptions {
  //   caption?: PaletteOptions["primary"];
  // }

  // interface PaletteColor {}

  // interface SimplePaletteColorOptions {}

  interface ThemeOptions {}
}

// declare module "@mui/material/Button" {
//   interface ButtonPropsColorOverrides {
//     caption: true;
//   }
// }

// declare module "@mui/material/CircularProgress" {
//   interface CircularProgressPropsColorOverrides {
//     caption: true;
//   }
// }

declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    text: true;
  }
}

// declare module "@mui/material/TextField" {
//   interface TextFieldPropsColorOverrides {
//     caption: true;
//   }
// }

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsColorOverrides {
    text: true;
  }
}

// declare module "@mui/material/Checkbox" {
//   interface CheckboxPropsColorOverrides {
//     caption: true;
//   }
// }
