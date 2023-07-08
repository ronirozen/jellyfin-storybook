import { ElementType, PropsWithChildren } from "react";

export type CardMediaProps<C extends ElementType = ElementType> = PropsWithChildren<{
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   * @default div
   */
  component?: C;
  /**
   * Image to be displayed as a background image.
   * Either `image` or `src` prop must be specified.
   * Note that caller must specify height otherwise the image will not be visible.
   */
  image?: string;
  /**
   * An alias for `image` property.
   * Available only with media components.
   * Media components: `video`, `audio`, `picture`, `iframe`, `img`.
   */
  src?: string;
  /**
   * If the media will be displayed in the background.
   */
  background?: boolean;
}>;

export type SizeCardMedia =
  | {
      background: true;
    }
  | {
      background?: false;
      /**
       * The width of the media card component.
       * Accepts a number value for pixels or a string value for other size units.
       * Example: 300 (for pixels), '50%' (for percentage), 'auto', etc.
       */
      width: number | string;
      /**
       * The height of the media card component.
       * Accepts a number value for pixels or a string value for other size units.
       * Example: 300 (for pixels), '50%' (for percentage), 'auto', etc.
       */
      height: number | string;
    };
