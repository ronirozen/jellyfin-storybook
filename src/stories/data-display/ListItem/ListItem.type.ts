import { PropsWithChildren } from "react";

export type ListItemProps = PropsWithChildren<{
  /**
   * If `true`, all padding is removed.
   * @default false
   */
  disablePadding?: boolean;
  /**
   * If `true`, a divider will be displayed after the item.
   * @default false
   */
  divider?: boolean;
  Action?: JSX.Element;
}>;
