import { Meta, StoryObj } from "@storybook/react";
import { SearchIcons as SearchIconsComponent } from "storybook-docs/components";

const meta: Meta = {
  args: {},
  title: "Search Icons",
  parameters: { options: { showPanel: false } }
};
export default meta;

type Story = StoryObj;

export const SearchIcons: Story = {
  render: SearchIconsComponent
};
