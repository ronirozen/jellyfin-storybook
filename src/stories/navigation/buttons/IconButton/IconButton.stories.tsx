import type { FC, MouseEvent } from "react";
import { StoryObj, Meta } from "@storybook/react";

import { IconButton } from "./IconButton";

import { Close } from "icons";

(Close as FC).displayName = "Close";

var meta: Meta<typeof IconButton> & { component: FC } = {
  tags: ["autodocs"],
  component: IconButton,
  title: "Navigation/IconButton",
  args: { children: <Close />, onClick: (event: MouseEvent) => alert("Hi") }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "primary"
  }
};

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
