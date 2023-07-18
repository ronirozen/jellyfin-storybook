import { IconButton, styled } from "@mui/material";

// Style
import { Color } from "style";

// Hooks
import { useOpacity } from "hooks/useOpacity";

// Type
import { IconButtonProps } from "./IconButton.type";

export const StyledIconButton = styled(IconButton as (props: IconButtonProps) => JSX.Element, {
  shouldForwardProp: prop => typeof prop !== "string" || !new Set(["hoverColor", "color"]).has(prop)
})(({ theme, color = "text", hoverColor = color }) => {
  const [original, hover] = [color, hoverColor].map(nameColor => {
    if (nameColor === "text") {
      const color = theme.palette.text.primary;

      return { color };
    }

    const color = theme.palette[nameColor as Color].main;
    const bgColor = useOpacity(color, 0.2);

    return { color, backgroundColor: bgColor };
  });

  return {
    ...original,
    "&:hover": {
      ...hover
    }
  };
});
