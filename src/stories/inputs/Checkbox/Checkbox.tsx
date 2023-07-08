// Type
import { CheckboxProps } from "./Checkbox.type";

// Style
import { StyledCheckbox, StyledCheckedIcon, StyledFormControlLabel, StyledIcon } from "./Checkbox.style";

export const Checkbox = ({ label, color, size, ...props }: CheckboxProps) => {
  return (
    <StyledFormControlLabel
      label={label}
      control={
        <StyledCheckbox
          {...props}
          icon={<StyledIcon color={color} size={size} />}
          checkedIcon={<StyledCheckedIcon color={color} size={size} />}
        />
      }
    />
  );
};
