import { CardContentProps } from "./CardContent.type";
import { CardContentStyled } from "./CardContent.style";

export const CardContent = ({ children, ...props }: CardContentProps) => {
  return <CardContentStyled {...props}>{children}</CardContentStyled>;
};
