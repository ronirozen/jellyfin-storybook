// Type
import { ListItemProps } from "./ListItem.type";

// Style
import { StyledListItem } from "./ListItem.style";

export const ListItem = ({ children, disablePadding, divider }: ListItemProps) => {
  return (
    <StyledListItem divider={divider} disablePadding={disablePadding}>
      {children}
    </StyledListItem>
  );
};
