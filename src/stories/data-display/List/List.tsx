// Type
import { ListProps } from "./List.type";

// Style
import { StyledList } from "./List.style";

export const List = ({ ...props }: ListProps) => {
  return <StyledList {...props} />;
};
