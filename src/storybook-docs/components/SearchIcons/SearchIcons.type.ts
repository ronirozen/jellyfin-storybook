import type { ElementType } from "react";
import * as mui from "@mui/icons-material";

export type IconType = { name: string; theme: string; importName: keyof typeof mui; Component: ElementType };
