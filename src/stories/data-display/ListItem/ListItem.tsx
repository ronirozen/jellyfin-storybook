// Type
import { ListItemProps } from "./ListItem.type";

// Style
import { StyledListItem } from "./ListItem.style";

export const ListItem = ({ children, disablePadding }: ListItemProps) => {
  return <StyledListItem disablePadding={disablePadding}>{children}</StyledListItem>;
};
