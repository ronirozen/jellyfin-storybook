import { DOMAttributes, PropsWithChildren } from "react";

import { Color } from "style";

export type CardProps = PropsWithChildren<{
  onClick?: DOMAttributes<HTMLDivElement>["onClick"];
  /**
   * Specifies the orientation of the card.
   * Valid values are 'horizontal' and 'vertical'.
   * @default horizontal
   */
  orientation?: "horizontal" | "vertical";
  /**
   * The width of the card component.
   * Accepts a number value for pixels or a string value for other size units.
   * Example: 300 (for pixels), '50%' (for percentage), 'auto', etc.
   */
  width: number | string;
  /**
   * The background color of the element.
   * [palette customization guide](?path=/story/style--color-palette).
   * @default primary
   */
  bgColor?: Color;
}>;
