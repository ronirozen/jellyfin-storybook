import { Avatar, styled } from "@mui/material";

// Constant
import { sizes } from "./Avatar.constant";

// Type
import { AvatarProps } from "./Avatar.type";

export const StyledAvatar = styled(Avatar)<AvatarProps>(({ theme, color, size = "md" }) => ({
  width: sizes[size],
  height: sizes[size],
  color: theme.palette.text.primary,
  ...(color ? { backgroundColor: theme.palette[color].main } : {})
}));
