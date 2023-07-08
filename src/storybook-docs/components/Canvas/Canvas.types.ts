import { StoryProps } from "@storybook/blocks";
import type { ModuleExport, ModuleExports } from "@storybook/types";

import { SourceCodeProps } from "../Source";
import { Layout, PreviewProps as PurePreviewProps } from "../Preview";

export type CanvasProps = Pick<PurePreviewProps, "withToolbar" | "additionalActions" | "className"> & {
  /**
   * Pass the export defining a story to render that story
   *
   * ```jsx
   * import { Meta, Canvas } from '@storybook/blocks';
   * import * as ButtonStories from './Button.stories';
   *
   * <Meta of={ButtonStories} />
   * <Canvas of={ButtonStories.Primary} />
   * ```
   */
  of?: ModuleExport;
  /**
   * Pass all exports of the CSF file if this MDX file is unattached
   *
   * ```jsx
   * import { Canvas } from '@storybook/blocks';
   * import * as ButtonStories from './Button.stories';
   *
   * <Canvas of={ButtonStories.Primary} meta={ButtonStories} />
   * ```
   */
  meta?: ModuleExports;
  /**
   * Specify the initial state of the source panel
   * hidden: the source panel is hidden by default
   * shown: the source panel is shown by default
   * none: the source panel is not available and the button to show it is hidden
   * @default hidden
   */
  sourceState?: "hidden" | "shown" | "none";
  /**
   * how to layout the story within the canvas
   * padded: the story has padding within the canvas
   * fullscreen: the story is rendered edge to edge within the canvas
   * centered: the story is centered within the canvas
   * @default padded
   */
  layout?: Layout;
  /**
   * @see {SourceProps}
   */
  source?: Omit<SourceCodeProps, "dark">;
  /**
   * @see {StoryProps}
   */
  story?: Pick<StoryProps, "inline" | "height" | "autoplay" | "__forceInitialArgs" | "__primary">;
};
