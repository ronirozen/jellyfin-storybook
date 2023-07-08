import { DOMAttributes, PropsWithChildren } from "react";

export type ListItemButtonProps = PropsWithChildren<{
  onClick?: DOMAttributes<HTMLDivElement>["onClick"];
}>;
