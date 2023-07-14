// Style
import {
  StyledRoot,
  StyledTextField,
  StyledInputLabel,
  StyledFormHelperText,
  StyledTextFieldWithAdornment
} from "./TextField.style";

// Type
import { TextFieldProps } from "./TextField.type";

// Hooks
import { useElementSize } from "hooks/useElementSize";

export const TextField = ({
  size,
  label,
  color,
  required,
  fullWidth,
  helperText,
  outlineColor,
  EndAdornment = <></>,
  StartAdornment = <></>,
  ...props
}: TextFieldProps) => {
  const [startAdornmentRef, { width }] = useElementSize();

  return (
    <StyledRoot fullWidth={fullWidth}>
      {label && (
        <StyledInputLabel required={required} padding={width}>
          {label}
        </StyledInputLabel>
      )}
      <StyledTextFieldWithAdornment>
        <div ref={startAdornmentRef}>{StartAdornment}</div>
        <StyledTextField
          hiddenLabel
          bgColor={color}
          variant="outlined"
          color={outlineColor}
          fullWidth={fullWidth}
          {...props}
          // @ts-ignore
          size={size}
        />
        <div>{EndAdornment}</div>
      </StyledTextFieldWithAdornment>
      <StyledFormHelperText id="component-helper-text">{helperText}</StyledFormHelperText>
    </StyledRoot>
  );
};
