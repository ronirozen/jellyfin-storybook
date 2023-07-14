import { FC } from "react";
import { Meta, StoryObj } from "@storybook/react";

// Icons
import { Favorite, MoreVert } from "icons";

// Stories
import { Card } from "./Card";
import * as CardMediaStories from "../CardMedia/CardMedia.stories";
import * as CardActionStories from "../CardAction/CardAction.stories";

(Favorite as FC).displayName = "Favorite";
(MoreVert as FC).displayName = "MoreVert";

const meta: Meta<typeof Card> = {
  args: {},
  component: Card,
  tags: ["autodocs"],
  title: "Data Display/Card"
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    width: 200,
    orientation: "horizontal"
  }
};

export const VerticalImage: Story = {
  args: {
    width: 150,
    orientation: "vertical",
    children: (
      <CardMediaStories.default.component
        {...CardMediaStories.default.args}
        {...CardMediaStories.Background.args}
      />
    )
  }
};

export const HorizontalImage: Story = {
  args: {
    width: 200,
    orientation: "horizontal",
    children: (
      <CardMediaStories.default.component
        {...CardMediaStories.default.args}
        {...CardMediaStories.Background.args}
        image="assets/horizontal.webp"
      />
    )
  }
};

export const ActionsIcon: Story = {
  args: {
    width: 200,
    orientation: "horizontal",
    children: (
      <CardActionStories.default.component
        {...CardActionStories.default.args}
        {...CardActionStories.Primary.args}
      />
    )
  }
};

export const TopPositionActionsIcon: Story = {
  args: {
    width: 200,
    orientation: "horizontal",
    children: (
      <CardActionStories.default.component
        {...CardActionStories.default.args}
        {...CardActionStories.TopPosition.args}
      />
    )
  }
};
