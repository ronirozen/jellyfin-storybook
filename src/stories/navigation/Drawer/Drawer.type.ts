import { SwipeableDrawerProps } from "@mui/material";

export type DrawerProps = Omit<SwipeableDrawerProps, "open" | "anchor" | "sx" | "classes"> & {
  isOpen: boolean;
  placement: "top" | "left" | "bottom" | "right";
};
