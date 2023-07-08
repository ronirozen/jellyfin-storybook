import { styled } from "@storybook/theming";

//  Types
import { LinkProps } from "./Link.type";

export const StyledLink = styled("a")<LinkProps>(({ theme, position = "button" }) => ({
  ...(position === "top" ? { marginBottom: "-20px" } : { marginTop: "-35px" })
}));
