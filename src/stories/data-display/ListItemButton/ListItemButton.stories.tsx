import { FC } from "react";
import { Meta, StoryObj } from "@storybook/react";

// Stories
import { ListItemButton } from "./ListItemButton";
import * as ListItemTextStories from "../ListItemText/ListItemText.stories";

const meta: Meta<typeof ListItemButton> & { component: FC } = {
  tags: ["autodocs"],
  component: ListItemButton,
  title: "Data Display/List/ListItemButton",
  args: {
    onClick: () => alert("Hi"),
    children: (
      <ListItemTextStories.default.component
        {...ListItemTextStories.default.args}
        {...ListItemTextStories.Primary.args}
      />
    )
  }
};

export default meta;
type Story = StoryObj<typeof ListItemButton>;

export const Primary: Story = {
  args: {}
};

export const Secondary: Story = {
  args: {
    color: "secondary"
  }
};
