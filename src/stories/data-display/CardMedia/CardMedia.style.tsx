import { styled } from "@mui/material";
import { CardMediaProps } from "./CardMedia.type";

export const CardMediaStyled = styled("div")<
  { isMediaComponent: boolean; width?: number | string; height?: number | string } & CardMediaProps
>(({ background, width, height }) => ({
  display: "block",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  ...(background ? { width: "100%", height: "100%", position: "absolute", zIndex: 0 } : { width, height })
}));
