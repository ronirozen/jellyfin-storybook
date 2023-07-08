import { PropsWithChildren, DetailedHTMLProps, AnchorHTMLAttributes } from "react";

export type LinkProps = PropsWithChildren<
  DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
    /**
     * @default button
     */
    position?: "top" | "button";
  }
>;
