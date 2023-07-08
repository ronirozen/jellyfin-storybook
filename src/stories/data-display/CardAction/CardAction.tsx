import { CardActionProps } from "./CardAction.type";
import { CardActionStyled } from "./CardAction.style";

export const CardAction = ({ children, ...props }: CardActionProps) => (
  <CardActionStyled {...props}>{children}</CardActionStyled>
);
