import { useState } from "react";
import { StoryObj, Meta } from "@storybook/react";

//  Types
import { DrawerProps } from "./Drawer.type";

//  Stories
import { Drawer } from "./Drawer";
import * as ButtonStories from "stories/navigation/buttons/Button/Button.stories";

const meta: Meta<typeof Drawer> = {
  component: Drawer,
  tags: ["autodocs"],
  title: "Navigation/Drawer",
  args: {
    children: (
      <div style={{ width: 250 }}>
        <h2 style={{ margin: "20px auto", width: "max-content" }}>Content</h2>
      </div>
    )
  },
  render: (props: Omit<DrawerProps, "onClose" | "isOpen">) => {
    const [isOpen, setIsOpen] = useState(false);

    // Sets a click handler to change the label's value
    const handleOnChange = () => {
      setIsOpen(prev => !prev);
    };

    return (
      <>
        <ButtonStories.default.component
          {...ButtonStories.default.args}
          {...ButtonStories.Primary.args}
          onClick={handleOnChange}
        />
        <Drawer isOpen={isOpen} onClose={handleOnChange} {...props} />
      </>
    );
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placement: "left"
  }
};

export const Right: Story = {
  args: {
    placement: "right"
  }
};
