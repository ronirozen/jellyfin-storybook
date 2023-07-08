import { SourceType } from "@storybook/docs-tools";
import { ActionItem, SyntaxHighlighter } from "@storybook/components";
import { ComponentProps, PropsWithChildren, ReactElement } from "react";
import type { ModuleExport, StoryContextForLoaders } from "@storybook/types";

export enum SourceState {
  OPEN = "open",
  NONE = "none",
  CLOSED = "closed"
}

export enum SourceError {
  NO_STORY = "There\u2019s no story here.",
  SOURCE_UNAVAILABLE = "Oh no! The source is not available."
}

export interface SourceCodeProps {
  /**
   * The language the syntax highlighter uses for your story’s code
   */
  language?: string;
  /**
   * Use this to override the content of the source block.
   */
  code?: string;
  /**
   * The (prettier) formatter the syntax highlighter uses for your story’s code.
   */
  format?: ComponentProps<typeof SyntaxHighlighter>["format"];
  /**
   * Display the source snippet in a dark mode.
   */
  dark?: boolean;
}

export type SourceParameters = PropsWithChildren<
  SourceCodeProps & {
    /**
     * Where to read the source code from, see `SourceType`
     */
    type?: SourceType;
    /**
     * Transform the detected source for display
     *
     * @deprecated use `transform` prop instead
     */
    transformSource?: (code: string, storyContext: StoryContextForLoaders) => string;
    /**
     * Transform the detected source for display
     */
    transform?: (code: string, storyContext: StoryContextForLoaders) => string;
    /**
     * Internal: set by our CSF loader (`enrichCsf` in `@storybook/csf-tools`).
     */
    originalSource?: string;
  }
>;

export type SourceProps = SourceParameters & {
  /**
   * Pass the export defining a story to render its source
   *
   * ```jsx
   * import { Source } from '@storybook/blocks';
   * import * as ButtonStories from './Button.stories';
   *
   * <Source of={ButtonStories.Primary} />
   * ```
   */
  of?: ModuleExport;

  /** @deprecated use of={storyExport} instead */
  id?: string;

  /** @deprecated use of={storyExport} instead */
  ids?: string[];

  /**
   * Internal prop to control if a story re-renders on args updates
   */
  __forceInitialArgs?: boolean;
  isLoading?: boolean;
  error?: SourceError;
};

// state is used by the Canvas block, which also calls useSourceProps
export type SourceStateProps = { state: SourceState; error?: SourceError };

export interface SourceItem {
  source?: ReactElement;
  actionItem: ActionItem;
}
