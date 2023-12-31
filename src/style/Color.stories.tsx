import { Meta, StoryObj } from "@storybook/react";
import { ColorPalette as ColorPaletteComponent } from "storybook-docs/components";

const meta: Meta = {
  args: {},
  title: "Color Palette",
  parameters: { options: { showPanel: false } }
};
export default meta;

type Story = StoryObj;

export const ColorPalette: Story = {
  render: ColorPaletteComponent
};
