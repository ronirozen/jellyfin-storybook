import { SwipeableDrawerProps } from "@mui/material";

export type DrawerProps = Omit<SwipeableDrawerProps, "open" | "anchor" | "sx" | "classes" | "onOpen"> & {
  isOpen: boolean;
  onOpen?: React.ReactEventHandler<{}>;
  placement: "top" | "left" | "bottom" | "right";
};
