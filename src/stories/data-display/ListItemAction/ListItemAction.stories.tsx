import { FC } from "react";
import { Meta, StoryObj } from "@storybook/react";

//  Icons
import { Delete } from "icons";

// Stories
import { ListItemAction } from "./ListItemAction";
import * as IconButtonStories from "stories/navigation/buttons/IconButton/IconButton.stories";

(Delete as FC).displayName = "Delete";

const meta: Meta<typeof ListItemAction> & { component: FC } = {
  tags: ["autodocs"],
  component: ListItemAction,
  title: "Data Display/List/ListItemAction",
  args: {
    children: (
      <IconButtonStories.default.component
        color="text"
        hoverColor="info"
        {...IconButtonStories.default.args}
        {...IconButtonStories.Text.args}
      >
        <Delete />
      </IconButtonStories.default.component>
    )
  }
};

export default meta;
type Story = StoryObj<typeof ListItemAction>;

export const Primary: Story = {
  args: {}
};
