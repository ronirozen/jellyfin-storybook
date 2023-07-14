// Type
import { ButtonProps } from "./Button.type";

// Style
import { StyledButton } from "./Button.style";

export const Button = ({ children, ...props }: ButtonProps) => (
  <StyledButton {...props} aria-label={children?.toString() || "button"}>
    {children}
  </StyledButton>
);
