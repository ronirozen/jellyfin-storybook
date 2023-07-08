import { Variant } from "@mui/material/styles/createTypography";
import { PropsWithChildren, DetailedHTMLProps, AnchorHTMLAttributes } from "react";

// Type
import { Color } from "style";

export type LinkProps = PropsWithChildren<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
    /**
     * The color of the component.
     * [palette customization guide](?path=/story/style--color-palette).
     * @default primary
     */
    color?: Color;
    variant?: Variant;
    underline?: "none" | "hover" | "always";
  }
>;
