import { CardProps } from "./Card.type";
import { CardStyled } from "./Card.style";

export const Card = ({ children, onClick, ...props }: CardProps) => {
  return (
    <CardStyled onClick={onClick} {...props}>
      {children}
    </CardStyled>
  );
};
