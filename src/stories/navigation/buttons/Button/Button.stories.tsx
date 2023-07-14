import type { FC } from "react";
import { StoryObj, Meta } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> & { component: FC } = {
  component: Button,
  tags: ["autodocs"],
  title: "Navigation/Button",
  args: { children: "Press me", onClick: () => alert("Hi") }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

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

export const Loading: Story = {
  args: {
    loading: true
  }
};

export const Link: Story = {
  args: {
    onClick: () => {},
    href: "https://jellyfin.org/"
  }
};

export const Text: Story = {
  args: {
    variant: "text"
  }
};

export const FullWidth: Story = {
  args: {
    fullWidth: true
  },
  decorators: [
    Story => (
      <div style={{ width: "1000px" }}>
        <Story>Press me</Story>
      </div>
    )
  ]
};
