import { FC } from "react";

// Type
import { SelectProps } from "./Select.type";

// Icons
import { KeyboardArrowDown } from "icons";

// Style
import { StyledSelect } from "./Select.style";

(KeyboardArrowDown as FC).displayName = "KeyboardArrowDown";

export const Select = ({ options, SelectProps, ...props }: SelectProps) => {
  return (
    <StyledSelect
      select
      SelectProps={{
        ...SelectProps,
        native: true,
        IconComponent: () => <KeyboardArrowDown style={{ position: "absolute", right: 7 }} />
      }}
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
