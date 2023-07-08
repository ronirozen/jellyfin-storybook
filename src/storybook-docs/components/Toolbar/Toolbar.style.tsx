import { styled } from "@storybook/theming";
import { FlexBar } from "@storybook/components";

export const Bar = styled(FlexBar)({
  top: 0,
  left: 0,
  right: 0,
  position: "absolute",
  transition: "transform .2s linear"
});
