import { ElementType } from "react";
import { VirtuosoGrid } from "react-virtuoso";
import { Box, Grid, SvgIcon, styled, Paper, InputBase, Skeleton } from "@mui/material";

import { Link } from "stories";

export const ListContainer = styled("div")(() => ({
  display: "flex",
  flexWrap: "wrap"
}));

export const StyledIcon = styled("span")(({ theme }) => ({
  padding: "0.4rem",
  display: "inline-flex",
  flexDirection: "column",
  color: theme.palette.text.secondary,
  "& > div": {
    display: "flex"
  },
  "& > div > *": {
    width: 0,
    flexGrow: 1,
    fontSize: ".6rem",
    overflow: "hidden",
    textAlign: "center",
    textOverflow: "ellipsis"
  }
}));

export const StyledSvgIcon = styled(SvgIcon)(({ theme }) => ({
  cursor: "pointer",
  boxSizing: "content-box",
  padding: theme.spacing(3),
  margin: theme.spacing(1, 0),
  color: theme.palette.text.primary,
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create(["background-color", "box-shadow"], {
    duration: theme.transitions.duration.shortest
  }),
  "&:hover": {
    boxShadow: theme.shadows[1],
    backgroundColor: theme.palette.background.paper
  }
}));

export const StyledSkeleton = styled(Skeleton)(({ theme }) => ({
  padding: theme.spacing(3),
  margin: theme.spacing(3)
}));

export const StyledGrid = styled(Grid)(({ theme }) => ({
  width: 250,
  [theme.breakpoints.up("md")]: {
    width: 500
  },
  [theme.breakpoints.up("lg")]: {
    width: 750
  },
  [theme.breakpoints.up("xl")]: {
    width: 1000
  }
}));

export const StyledVirtuosoGrid = styled(VirtuosoGrid)(() => ({
  marginTop: 30,
  minHeight: 300
}));

export const StyledImportLink = styled(Link)(({ theme }) => ({
  textAlign: "right",
  padding: theme.spacing(0.5, 1)
}));

export const StyledCanvas = styled(Box)<{ component: ElementType }>(({ theme }) => ({
  fontSize: 210,
  marginTop: theme.spacing(2),
  backgroundSize: "30px 30px",
  backgroundColor: "transparent",
  color: theme.palette.text.primary,
  backgroundPosition: "0 0, 0 15px, 15px -15px, -15px 0",
  backgroundImage:
    theme.palette.mode === "light"
      ? "linear-gradient(45deg, #e6e6e6 25%, transparent 25%), linear-gradient(-45deg, #e6e6e6 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e6e6e6 75%), linear-gradient(-45deg, transparent 75%, #e6e6e6 75%)"
      : "linear-gradient(45deg, #595959 25%, transparent 25%), linear-gradient(-45deg, #595959 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #595959 75%), linear-gradient(-45deg, transparent 75%, #595959 75%)"
}));

export const StyledFontSize = styled("span")<{ fontSize?: string }>(({ theme }) => ({
  margin: theme.spacing(3)
}));

export const StyledContext = styled(Box, {
  shouldForwardProp: prop => "contextColor" !== prop
})<{ contextColor: string; component: ElementType }>(({ theme, contextColor }) => ({
  boxSizing: "content-box",
  margin: theme.spacing(1),
  padding: theme.spacing(2, 3),
  borderRadius: theme.shape.borderRadius,
  ...(contextColor === "primary" && {
    color: theme.palette.primary.main
  }),
  ...(contextColor === "primaryInverse" && {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main
  }),
  ...(contextColor === "textPrimary" && {
    color: theme.palette.text.primary
  }),
  ...(contextColor === "textPrimaryInverse" && {
    color: theme.palette.background.paper,
    backgroundColor: theme.palette.text.primary
  }),
  ...(contextColor === "textSecondary" && {
    color: theme.palette.text.secondary
  }),
  ...(contextColor === "textSecondaryInverse" && {
    color: theme.palette.background.paper,
    backgroundColor: theme.palette.text.secondary
  })
}));

export const StyledForm = styled("form")({
  top: 80,
  position: "sticky"
});

export const StyledPaper = styled(Paper)(({ theme }) => ({
  top: 80,
  width: "100%",
  display: "flex",
  borderRadius: 12,
  position: "sticky",
  padding: "2px 4px",
  border: "1px solid",
  alignItems: "center",
  marginBottom: theme.spacing(2),
  borderColor: theme.palette.divider
}));

export const StyledInput = styled(InputBase)({
  flex: 1,
  marginLeft: 8
});
