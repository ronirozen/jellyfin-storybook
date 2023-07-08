import { FC } from "react";
import { Meta, StoryObj } from "@storybook/react";

// Stories
import { CardContent } from "../CardContent";

const meta: Meta<typeof CardContent> & { component: FC } = {
  tags: ["autodocs"],
  component: CardContent,
  args: { children: "Text" },
  title: "Data Display/Card/CardContent",
  decorators: [
    Story => (
      <div style={{ width: "80px", height: "100px", position: "relative" }}>
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof CardContent>;

export const Primary: Story = {};
