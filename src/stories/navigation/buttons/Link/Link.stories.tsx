import { StoryObj, Meta } from "@storybook/react";

import { Link } from "./Link";

const meta: Meta<typeof Link> = {
  component: Link,
  tags: ["autodocs"],
  title: "Navigation/Link",
  args: { children: "Learn how you can contribute.", href: "https://jellyfin.org/" }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Info: Story = {
  args: {
    color: "info"
  }
};

export const UnderlineHover: Story = {
  args: {
    underline: "hover"
  }
};

export const WithUnderline: Story = {
  args: {
    underline: "none"
  }
};

export const H1Variant: Story = {
  args: {
    variant: "h1"
  }
};
