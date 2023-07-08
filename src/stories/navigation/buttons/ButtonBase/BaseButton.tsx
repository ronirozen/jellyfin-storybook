// Type
import { BaseButtonProps } from "./BaseButton.type";

// Style

import { StyledBaseButton, StyledChildrenHidden, StyledCircularProgress } from "./BaseButton.style";

export const BaseButton = ({
  color,
  loading,
  disabled,
  children,
  variant = "contained",
  ...otherProps
}: BaseButtonProps) => {
  return loading && !disabled ? (
    <StyledBaseButton {...otherProps} color={color} variant={variant}>
      <StyledChildrenHidden>{children}</StyledChildrenHidden>
      <StyledCircularProgress size={25} color={variant === "contained" ? "inherit" : color} />
    </StyledBaseButton>
  ) : (
    <StyledBaseButton {...otherProps} color={color} disabled={disabled} variant={variant}>
      {children}
    </StyledBaseButton>
  );
};
