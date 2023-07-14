import { FC } from "react";
import { Meta, StoryObj } from "@storybook/react";

// Stories
import { CardMedia } from "./CardMedia";

const meta: Meta<typeof CardMedia> & { component: FC<any> } = {
  tags: ["autodocs"],
  component: CardMedia,
  title: "Data Display/Card/CardMedia",
  args: { image: "assets/vertical.webp" },
  decorators: [
    Story => (
      <div style={{ width: 140, height: 200, position: "relative" }}>
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof CardMedia>;

export const Primary: Story = {
  args: {
    width: 140,
    height: 200,
    background: false
  }
};

export const Background: Story = {
  args: {
    background: true
  }
};
