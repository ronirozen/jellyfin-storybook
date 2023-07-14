import { FC } from "react";

// Type
import { SelectProps } from "./Select.type";

// Icons
import { KeyboardArrowDown } from "icons";

// Style
import { StyledSelect } from "./Select.style";

(KeyboardArrowDown as FC).displayName = "KeyboardArrowDown";

export const Select = ({ options, SelectProps, label, ...props }: SelectProps) => {
  return (
    <StyledSelect
      select
      label={label}
      SelectProps={{
        ...SelectProps,
        native: true,
        IconComponent: () => <KeyboardArrowDown style={{ position: "absolute", right: 7 }} />
      }}
      inputProps={{ "aria-label": label?.toString() }}
      {...props}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};
