import { lazy } from "react";
import { darken } from "@mui/material";
import { styled } from "@storybook/theming";

import { Layout, PreviewProps } from "./Preview.type";
import { Source } from "storybook-docs/components/Source";
import { Toolbar } from "storybook-docs/components/Toolbar";

export const ChildrenContainer = styled.div<PreviewProps & { layout: Layout }>(
  ({ isColumn, columns, layout }) => ({
    flexWrap: "wrap",
    overflow: "auto",
    position: "relative",
    flexDirection: isColumn ? "column" : "row",
    display: isColumn || !columns ? "inline-block" : "flex",

    "& .innerZoomElementWrapper > *": isColumn
      ? {
          display: "block",
          width: layout !== "fullscreen" ? "calc(100% - 20px)" : "100%"
        }
      : {
          display: "inline-block",
          maxWidth: layout !== "fullscreen" ? "calc(100% - 20px)" : "100%"
        }
  }),
  ({ layout = "padded" }) =>
    layout === "centered" || layout === "padded"
      ? {
          padding: "30px 20px",
          margin: -10,
          "& .innerZoomElementWrapper > *": {
            width: "auto",
            border: "10px solid transparent!important"
          }
        }
      : {},
  ({ layout = "padded" }) =>
    layout === "centered"
      ? {
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
          alignContent: "center",
          justifyContent: "center"
        }
      : {},
  ({ columns }) =>
    columns && columns > 1
      ? { ".innerZoomElementWrapper > *": { minWidth: `calc(100% / ${columns} - 20px)` } }
      : {}
);

export const StyledSource = styled(Source)(({ theme }) => ({
  margin: 0,
  border: "none",
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  color: theme.color.lightest,
  borderBottomLeftRadius: theme.appBorderRadius,
  borderBottomRightRadius: theme.appBorderRadius,
  background: theme.base === "light" ? "rgba(0, 0, 0, 0.85)" : darken(theme?.background.content, 0.05),

  button: {
    background: theme.base === "light" ? "rgba(0, 0, 0, 0.85)" : darken(theme?.background.content, 0.05)
  }
}));

export const PreviewContainer = styled("div")<PreviewProps>(
  ({ theme, withSource, isExpanded }) => ({
    overflow: "hidden",
    position: "relative",
    margin: "25px 0 40px",
    borderRadius: theme.appBorderRadius,
    background: theme.background.content,
    border: `1px solid ${theme.appBorderColor}`,
    ...(isExpanded ? { borderBottomWidth: 0 } : {}),
    ...(withSource && isExpanded ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 } : {}),
    boxShadow: theme.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",

    "h3 + &": {
      marginTop: "16px"
    }
  }),
  ({ withToolbar }) => (withToolbar ? { paddingTop: 40 } : {})
);

export const PositionedToolbar = styled(Toolbar)({
  top: 0,
  left: 0,
  right: 0,
  height: 40,
  position: "absolute"
});

export const Relative = styled.div({
  overflow: "hidden",
  position: "relative"
});

const Preview = lazy(() => import("./Preview"));
export const StyledPreview = styled(Preview)(() => ({
  ".docs-story": {
    paddingTop: 32,
    paddingBottom: 40
  }
}));
