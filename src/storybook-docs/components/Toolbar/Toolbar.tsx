import { Fragment } from "react";
import type { FC, MouseEvent } from "react";
import { Icons, IconButton, IconButtonSkeleton } from "@storybook/components";

import { Bar } from "./Toolbar.style";
import { ToolbarProps, ZoomProps } from "./Toolbar.type";

const Zoom: FC<ZoomProps> = ({ zoom, resetZoom }) => (
  <>
    <IconButton
      key="zoomin"
      title="Zoom in"
      onClick={(e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        zoom(0.8);
      }}
    >
      <Icons icon="zoom" />
    </IconButton>
    <IconButton
      key="zoomout"
      title="Zoom out"
      onClick={(e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        zoom(1.25);
      }}
    >
      <Icons icon="zoomout" />
    </IconButton>
    <IconButton
      key="zoomreset"
      title="Reset zoom"
      onClick={(e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        resetZoom();
      }}
    >
      <Icons icon="zoomreset" />
    </IconButton>
  </>
);

export const Toolbar: FC<ToolbarProps> = ({ isLoading, storyId, baseUrl, zoom, resetZoom, ...rest }) => (
  <Bar {...rest}>
    <Fragment key="left">
      {isLoading ? [1, 2, 3].map(key => <IconButtonSkeleton key={key} />) : <Zoom {...{ zoom, resetZoom }} />}
    </Fragment>
  </Bar>
);
