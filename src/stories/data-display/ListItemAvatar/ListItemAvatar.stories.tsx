import { FC } from "react";
import { Meta, StoryObj } from "@storybook/react";

// Icons
import { Notifications } from "icons";

// Stories
import { ListItemAvatar } from "./ListItemAvatar";
import * as AvatarStories from "../Avatar/Avatar.stories";

(Notifications as FC).displayName = "Notifications";

const meta: Meta<typeof ListItemAvatar> & { component: FC } = {
  tags: ["autodocs"],
  component: ListItemAvatar,
  title: "Data Display/List/ListItemAvatar",
  args: {
    children: (
      <AvatarStories.default.component {...AvatarStories.default.args} {...AvatarStories.Secondary.args}>
        <Notifications />
      </AvatarStories.default.component>
    )
  }
};

export default meta;
type Story = StoryObj<typeof ListItemAvatar>;

export const Primary: Story = {
  args: {}
};
