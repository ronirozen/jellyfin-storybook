import { Avatar, styled } from "@mui/material";

// Type
import { AvatarProps } from "./Avatar.type";

export const sizes = {
  sl: 24,
  md: 40,
  lg: 56
} as const;

export const StyledAvatar = styled(Avatar)<AvatarProps>(({ theme, color, size = "md" }) => ({
  width: sizes[size],
  height: sizes[size],
  color: theme.palette.text.primary,
  ...(color ? { backgroundColor: theme.palette[color].main } : {})
}));
