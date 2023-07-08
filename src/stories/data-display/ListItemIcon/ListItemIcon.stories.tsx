import { FC } from "react";
import { Meta, StoryObj } from "@storybook/react";

// Icons
import { Folder } from "icons";

// Stories
import { ListItemIcon } from "./ListItemIcon";

(Folder as FC).displayName = "Folder";

const meta: Meta<typeof ListItemIcon> & { component: FC } = {
  tags: ["autodocs"],
  component: ListItemIcon,
  args: { children: <Folder /> },
  title: "Data Display/List/ListItemIcon"
};

export default meta;
type Story = StoryObj<typeof ListItemIcon>;

export const Primary: Story = {
  args: {}
};
