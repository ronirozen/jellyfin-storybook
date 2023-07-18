import type { FC } from "react";
import { StoryObj, Meta } from "@storybook/react";

import { IconButton } from "./IconButton";

import { Close } from "icons";

(Close as FC).displayName = "Close";

var meta: Meta<typeof IconButton> & { component: FC } = {
  tags: ["autodocs"],
  component: IconButton,
  title: "Navigation/IconButton",
  args: { children: <Close />, onClick: () => alert("Hi") }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {};

export const Secondary: Story = {
  args: {
    color: "secondary"
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const AnotherColorOnHover: Story = {
  args: {
    hoverColor: "info"
  }
};
