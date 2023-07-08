import { PropsWithChildren } from "react";

import { Color } from "style";

export type ListItemProps = PropsWithChildren<{
  /**
   * The color of the component.
   * [palette customization guide](?path=/story/style--color-palette).
   * @default primary
   */
  color?: Color;
  /**
   * If `true`, all padding is removed.
   * @default false
   */
  disablePadding?: boolean;
  Action?: JSX.Element;
}>;
