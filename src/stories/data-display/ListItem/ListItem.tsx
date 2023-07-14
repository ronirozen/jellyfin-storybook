// Type
import { Divider } from "@mui/material";
import { ListItemProps } from "./ListItem.type";

// Style
import { StyledListItem } from "./ListItem.style";

export const ListItem = ({ children, disablePadding, divider }: ListItemProps) => {
  return (
    <>
      <StyledListItem disablePadding={disablePadding}>{children}</StyledListItem>
      {divider && <Divider />}
    </>
  );
};
