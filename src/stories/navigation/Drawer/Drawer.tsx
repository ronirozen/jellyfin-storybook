// Type
import { DrawerProps } from "./Drawer.type";

// Style
import { StyledDrawer } from "./Drawer.style";

export const Drawer = ({ isOpen, placement, onOpen = () => {}, ...props }: DrawerProps) => {
  return <StyledDrawer open={isOpen} anchor={placement} onOpen={onOpen} {...props} />;
};
