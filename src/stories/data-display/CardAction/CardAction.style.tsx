import { styled } from "@mui/material";

import { CardActionProps } from "./CardAction.type";

export const CardActionStyled = styled("div")<CardActionProps>(({ position }) => ({
  right: 0,
  position: "absolute",
  ...{ [position || "bottom"]: 0 }
}));
