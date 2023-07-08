import { StoryObj, Meta } from "@storybook/react";

import { ProgressBar } from "./ProgressBar";

const meta: Meta<typeof ProgressBar> = {
  tags: ["autodocs"],
  args: { value: 40 },
  component: ProgressBar,
  title: "Feedback/ProgressBar",
  decorators: [
    Story => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    color: "secondary"
  }
};
