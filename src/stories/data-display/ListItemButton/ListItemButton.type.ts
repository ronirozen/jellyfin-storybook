import { DOMAttributes, PropsWithChildren } from "react";

import { Color } from "style";

export type ListItemButtonProps = PropsWithChildren<{
  onClick?: DOMAttributes<HTMLDivElement>["onClick"];
  /**
   * The color of the component.
   * [palette customization guide](?path=/story/color-palette--color-palette).
   * @default primary
   */
  color?: Color;
}>;
