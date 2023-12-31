import { FC } from "react";
import { StoryObj, Meta } from "@storybook/react";

import { Close } from "icons";
import { Avatar } from "./Avatar";

(Close as FC).displayName = "Close";

const meta: Meta<typeof Avatar> & { component: FC } = {
  tags: ["autodocs"],
  component: Avatar,
  title: "Data Display/Avatar"
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    color: "secondary"
  }
};

export const Icon: Story = {
  args: {
    children: <Close />
  }
};

export const Image: Story = {
  args: {
    alt: "Image",
    src: "assets/horizontal.webp"
  }
};

export const Text: Story = {
  args: {
    src: "image",
    alt: "Image"
  }
};

export const Small: Story = {
  args: {
    size: "sl"
  }
};

export const Rounded: Story = {
  args: {
    variant: "rounded"
  }
};

export const Custom: Story = {
  args: {
    color: "error",
    variant: "square"
  }
};
