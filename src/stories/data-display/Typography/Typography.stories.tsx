import { FC } from "react";
import { StoryObj, Meta } from "@storybook/react";

import { Typography } from "./Typography";

const meta: Meta<typeof Typography> & { component: FC } = {
  tags: ["autodocs"],
  component: Typography,
  args: { children: "Text" },
  title: "Data Display/Typography",
  decorators: [
    Story => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    color: "secondary"
  }
};

export const H3: Story = {
  args: {
    variant: "h3"
  }
};
