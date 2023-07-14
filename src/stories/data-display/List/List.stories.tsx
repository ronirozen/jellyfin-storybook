import { StoryObj, Meta } from "@storybook/react";
import { PropsWithChildren, ReactElement, cloneElement } from "react";

// Stories
import { List } from "./List";
import * as ListItemStories from "../ListItem/ListItem.stories";
import * as ListItemTextStories from "../ListItemText/ListItemText.stories";

const meta: Meta<typeof List> = {
  component: List,
  tags: ["autodocs"],
  title: "Data Display/List",
  decorators: [
    Story => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    )
  ],
  render: ({ children, ...args }: PropsWithChildren<{}>) => (
    <List {...args}>{[...Array(4)].map((_, i) => cloneElement(children as ReactElement, { key: i }))}</List>
  )
};

export default meta;
type Story = StoryObj<typeof List>;

export const Primary: Story = {
  args: {
    children: (
      <ListItemStories.default.component
        {...ListItemStories.default.args}
        {...ListItemStories.Primary.args}
      />
    )
  }
};

export const Divider: Story = {
  args: {
    children: (
      <ListItemStories.default.component
        {...ListItemStories.default.args}
        {...ListItemStories.Divider.args}
      />
    )
  }
};

export const SubText: Story = {
  args: {
    children: (
      <ListItemStories.default.component
        {...ListItemStories.default.args}
        {...ListItemStories.SubText.args}
      />
    )
  }
};

export const Button: Story = {
  args: {
    children: (
      <ListItemStories.default.component {...ListItemStories.default.args} {...ListItemStories.Button.args} />
    )
  }
};

export const Padding: Story = {
  args: {
    children: (
      <ListItemStories.default.component {...ListItemStories.default.args} {...ListItemStories.Primary.args}>
        <ListItemTextStories.default.component
          {...ListItemTextStories.default.args}
          {...ListItemTextStories.Padding.args}
        />
      </ListItemStories.default.component>
    )
  }
};

export const Icon: Story = {
  args: {
    children: (
      <ListItemStories.default.component {...ListItemStories.default.args} {...ListItemStories.Icon.args} />
    )
  }
};

export const Avatar: Story = {
  args: {
    children: (
      <ListItemStories.default.component {...ListItemStories.default.args} {...ListItemStories.Avatar.args} />
    )
  }
};

export const ActionButton: Story = {
  args: {
    children: (
      <ListItemStories.default.component
        {...ListItemStories.default.args}
        {...ListItemStories.ActionButton.args}
      />
    )
  }
};
