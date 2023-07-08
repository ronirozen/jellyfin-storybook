import { FC } from "react";
import { StoryObj, Meta } from "@storybook/react";

// Types
import { ListItemTextProps } from "./ListItemText.type";

// Style
import { Outline } from "storybook-docs/style/outline-css";

// Stories
import { ListItemText } from "./ListItemText";
import * as TypographyStories from "stories/data-display/Typography/Typography.stories";

const meta: Meta<typeof ListItemText> & { component: FC<ListItemTextProps> } = {
  tags: ["autodocs"],
  component: ListItemText,
  title: "Data Display/List/ListItemText",
  args: {
    padding: 0,
    children: (
      <TypographyStories.default.component
        {...TypographyStories.default.args}
        {...TypographyStories.Primary.args}
      >
        {"Text"}
      </TypographyStories.default.component>
    )
  },
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
  decorators: [Outline]
};

export const Padding: Story = {
  args: { padding: 8 },
  decorators: [Outline]
};
