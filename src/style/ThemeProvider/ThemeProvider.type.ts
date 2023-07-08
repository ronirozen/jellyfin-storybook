import { PropsWithChildren } from "react";
export type { ThemeOptions } from "@mui/material";
import { TypeText, Palette, ThemeOptions } from "@mui/material";

import { colors, textColors } from "./theme.constant";

export type Color = keyof Pick<Palette, (typeof colors)[number]>;
export type TextColor = keyof Pick<TypeText, (typeof textColors)[number]>;

export type ThemeProviderProps = PropsWithChildren<{ theme: ThemeOptions }>;
