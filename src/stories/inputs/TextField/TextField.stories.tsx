import { FC, useState, lazy } from "react";
import { StoryObj, Meta } from "@storybook/react";

// Icons
import { Search } from "icons";

// Type
import { TextFieldProps } from "./TextField.type";

// Stories
import { TextField } from "./TextField";
import * as IconButtonStories from "stories/navigation/buttons/IconButton/IconButton.stories";

(Search as FC).displayName = "Search";

const meta: Meta<typeof TextField> = {
  tags: ["autodocs"],
  component: TextField,
  title: "Input/TextField",
  args: { label: "Input name:" }
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Primary: Story = {};

export const OutlineColor: Story = {
  args: {
    color: "inherit",
    outlineColor: "info"
  }
};

export const OutlineColorOnFocus: Story = {
  args: {
    color: "primary",
    outlineColor: "info"
  }
};

export const Small: Story = {
  args: {
    size: "sl"
  }
};

export const fullWidth: Story = {
  args: {
    fullWidth: true
  }
};

export const HelperText: Story = {
  args: {
    fullWidth: true,
    helperText: "This name will be used to identify the server and will default to the server's hostname."
  }
};

export const Number: Story = {
  args: {
    type: "number"
  }
};

export const Custom: Story = {
  args: {
    size: "lg",
    color: "success",
    outlineColor: "error"
  }
};

export const Placeholder: Story = {
  args: {
    label: "",
    placeholder: "Placeholder"
  }
};

export const WithAdornmentIcon: Story = {
  args: {
    StartAdornment: <Search color="text" style={{ width: 30 }} />
  }
};

export const WithAdornmentText: Story = {
  args: {
    EndAdornment: <div style={{ margin: 5 }}>{"text"}</div>
  }
};

const TextFieldWithButtonComponent = (props: TextFieldProps) => {
  const [value, setValue] = useState("");

  return (
    <TextField
      {...props}
      value={value}
      onChange={e => setValue(e.target.value)}
      EndAdornment={
        <IconButtonStories.default.component
          {...IconButtonStories.default.args}
          {...IconButtonStories.Secondary.args}
          onClick={() => alert(value)}
        >
          <Search />
        </IconButtonStories.default.component>
      }
    />
  );
};

export const TextFieldWithAdornmentButton = {
  args: { ...Primary.args },
  render: (props: TextFieldProps) => <TextFieldWithButtonComponent {...props} />
};
