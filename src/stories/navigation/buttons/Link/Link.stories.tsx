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

export const Text: Story = {};

export const Info: Story = {
  args: {
    color: "info"
  }
};

export const UnderlineOnHover: Story = {
  args: {
    underline: "hover"
  }
};

export const WithoutUnderline: Story = {
  args: {
    underline: "none"
  }
};

export const H1Variant: Story = {
  args: {
    variant: "h1"
  }
};
