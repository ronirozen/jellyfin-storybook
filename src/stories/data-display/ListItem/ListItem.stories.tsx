import { FC } from "react";
import { StoryObj, Meta } from "@storybook/react";

//  Types
import { ListItemProps } from "./ListItem.type";

// Stories
import { ListItem } from "./ListItem";
import * as TypographyStories from "../Typography/Typography.stories";
import * as ListItemTextStories from "../ListItemText/ListItemText.stories";
import * as ListItemIconStories from "../ListItemIcon/ListItemIcon.stories";
import * as ListItemAvatarStories from "../ListItemAvatar/ListItemAvatar.stories";
import * as ListItemButtonStories from "../ListItemButton/ListItemButton.stories";
import * as ListItemActionStories from "../ListItemAction/ListItemAction.stories";

const meta: Meta<typeof ListItem> & { component: FC<ListItemProps> } = {
  id: "ListItem",
  tags: ["autodocs"],
  component: ListItem,
  title: "Data Display/List/ListItem",
  decorators: [
    Story => (
      <div style={{ width: "300px" }}>
        <Story />
      </div>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <ListItemTextStories.default.component
        {...ListItemTextStories.default.args}
        {...ListItemTextStories.Primary.args}
      />
    )
  }
};

export const SubText: Story = {
  args: {
    children: (
      <ListItemTextStories.default.component
        {...ListItemTextStories.default.args}
        {...ListItemTextStories.Primary.args}
      >
        <TypographyStories.default.component
          {...TypographyStories.default.args}
          {...TypographyStories.Primary.args}
        >
          {"Text"}
        </TypographyStories.default.component>
        <TypographyStories.default.component
          {...TypographyStories.default.args}
          {...TypographyStories.Secondary.args}
        >
          {"Sub text"}
        </TypographyStories.default.component>
      </ListItemTextStories.default.component>
    )
  }
};

export const Button: Story = {
  args: {
    disablePadding: true,
    children: (
      <ListItemButtonStories.default.component
        {...ListItemButtonStories.default.args}
        {...ListItemButtonStories.Primary.args}
      />
    )
  }
};

export const Padding: Story = {
  args: {
    children: (
      <ListItemTextStories.default.component
        {...ListItemTextStories.default.args}
        {...ListItemTextStories.Padding.args}
      />
    )
  }
};

export const Icon: Story = {
  args: {
    children: [
      <ListItemIconStories.default.component
        {...ListItemIconStories.default.args}
        {...ListItemIconStories.Primary.args}
      />,
      <ListItemTextStories.default.component
        {...ListItemTextStories.default.args}
        {...ListItemTextStories.Primary.args}
      />
    ]
  }
};

export const Avatar: Story = {
  args: {
    children: [
      <ListItemAvatarStories.default.component
        {...ListItemAvatarStories.default.args}
        {...ListItemAvatarStories.Primary.args}
      />,
      <ListItemTextStories.default.component
        {...ListItemTextStories.default.args}
        {...ListItemTextStories.Primary.args}
      />
    ]
  }
};

export const ActionButton: Story = {
  args: {
    children: [
      <ListItemAvatarStories.default.component
        {...ListItemAvatarStories.default.args}
        {...ListItemAvatarStories.Primary.args}
      />,
      <ListItemTextStories.default.component
        {...ListItemTextStories.default.args}
        {...ListItemTextStories.Primary.args}
      />,
      <ListItemActionStories.default.component
        {...ListItemActionStories.default.args}
        {...ListItemActionStories.Primary.args}
      />
    ]
  }
};
