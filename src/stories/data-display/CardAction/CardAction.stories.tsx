import { FC } from "react";
import { Meta, StoryObj } from "@storybook/react";

// Icons
import { Favorite, MoreVert } from "icons";

// Stories
import { CardAction } from "../CardAction";
import * as IconButtonStories from "stories/navigation/buttons/IconButton/IconButton.stories";

(Favorite as FC).displayName = "Favorite";
(MoreVert as FC).displayName = "MoreVert";

const meta: Meta<typeof CardAction> & { component: FC } = {
  tags: ["autodocs"],
  component: CardAction,
  title: "Data Display/Card/CardAction",
  args: {
    children: [
      <IconButtonStories.default.component
        key="Favorite"
        {...IconButtonStories.default.args}
        {...IconButtonStories.AnotherColorOnHover.args}
      >
        <Favorite />
      </IconButtonStories.default.component>,
      <IconButtonStories.default.component
        key="MoreVert"
        {...IconButtonStories.default.args}
        {...IconButtonStories.AnotherColorOnHover.args}
      >
        <MoreVert />
      </IconButtonStories.default.component>
    ]
  },
  decorators: [
    Story => (
      <div style={{ width: "80px", height: "100px", position: "relative" }}>
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof CardAction>;

export const Primary: Story = {};

export const TopPosition: Story = {
  args: {
    position: "top"
  }
};
