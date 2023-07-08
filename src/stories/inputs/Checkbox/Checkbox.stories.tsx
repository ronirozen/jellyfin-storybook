import { StoryObj, Meta } from "@storybook/react";

import { Checkbox } from "./Checkbox";

var meta: Meta<typeof Checkbox> = {
  tags: ["autodocs"],
  component: Checkbox,
  title: "Input/Checkbox",
  args: { label: "Checkbox:" }
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {};

export const Custom: Story = {
  args: {
    size: "small",
    color: "success"
  }
};
