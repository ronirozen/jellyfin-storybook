import { Color } from "style";

export type ProgressBarProps = {
  /**
   * The color of the component.
   * [palette customization guide](?path=/story/color-palette--color-palette).
   * @default primary
   */
  color?: Color;
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value?: number;
};
