import { ListItemAvatar as ListItemAvatarMui } from "@mui/material";

import { ListItemAvatarProps } from "./ListItemAvatar.type";

export const ListItemAvatar = ({ ...props }: ListItemAvatarProps) => <ListItemAvatarMui {...props} />;
