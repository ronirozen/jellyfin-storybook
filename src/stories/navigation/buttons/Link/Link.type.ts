import { Variant } from "@mui/material/styles/createTypography";
import { PropsWithChildren, DetailedHTMLProps, AnchorHTMLAttributes } from "react";

// Type
import { Color } from "style";

export type LinkProps = PropsWithChildren<
  Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, "color"> & {
    /**
     * The color of the component.
     * [palette customization guide](?path=/story/style--color-palette).
     * @default text
     */
    color?: Exclude<Color, "primary"> | "text";
    variant?: Variant;
    underline?: "none" | "hover" | "always";
  }
>;
