import { PropsWithChildren } from "react";

export type CardActionProps = PropsWithChildren<{
  /**
   * The position of the actions.
   * Accepts a value from the predefined options: "bottom" or "top".
   * @default bottom
   */
  position?: "bottom" | "top";
}>;
