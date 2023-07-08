import { styled } from "@storybook/theming";
import { Heading } from "@storybook/blocks";

export const StyledHeading = styled(Heading)(({ theme }) => ({
  border: 0,
  lineHeight: "16px",
  marginBottom: "12px",
  letterSpacing: "0.35em",
  textTransform: "uppercase",
  color: theme.textMutedColor,
  fontWeight: theme.typography.weight.bold,
  fontSize: `${theme.typography.size.s2 - 1}px`,

  "&:first-of-type": {
    // specificity issue
    marginTop: "56px"
  }
}));
