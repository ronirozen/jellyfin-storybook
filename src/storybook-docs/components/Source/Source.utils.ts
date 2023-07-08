import { SourceType } from "@storybook/docs-tools";
import { Args, PreparedStory, StoryContextForLoaders, StoryId } from "@storybook/types";
import { SourceContextProps, SourceItem, UNKNOWN_ARGS_HASH, argsHash } from "@storybook/blocks";

import { SourceParameters, SourceProps, SourceState } from "./Source.type";

export const getSourceState = (stories: PreparedStory[]) => {
  const states = stories.map(story => story.parameters.docs?.source?.state).filter(Boolean);
  if (states.length === 0) return SourceState.CLOSED;
  // FIXME: handling multiple stories is a pain
  return states[0];
};

export const getStorySource = (
  storyId: StoryId,
  args: Args,
  sourceContext: SourceContextProps
): SourceItem => {
  const { sources } = sourceContext;

  const sourceMap = sources?.[storyId];
  // If the source decorator hasn't provided args, we fallback to the "unknown args"
  // version of the source (which means if you render a story >1 time with different args
  // you'll get the same source value both times).
  const source = sourceMap?.[argsHash(args)] || sourceMap?.[UNKNOWN_ARGS_HASH];

  // source rendering is async so source is unavailable at the start of the render cycle,
  // so we fail gracefully here without warning
  return source || { code: "" };
};

export const getSnippet = ({
  snippet,
  storyContext,
  typeFromProps,
  transformFromProps
}: {
  snippet: string;
  typeFromProps: SourceType;
  storyContext: StoryContextForLoaders;
  transformFromProps?: SourceProps["transform"];
}): string => {
  const { __isArgsStory: isArgsStory } = storyContext.parameters;
  const sourceParameters = (storyContext.parameters.docs?.source || {}) as SourceParameters;

  const type = typeFromProps || sourceParameters.type || SourceType.AUTO;

  // if user has hard-coded the snippet, that takes precedence
  if (sourceParameters.code !== undefined) {
    return sourceParameters.code;
  }

  const useSnippet =
    // if user has explicitly set this as dynamic, use snippet
    type === SourceType.DYNAMIC ||
    // if this is an args story and there's a snippet
    (type === SourceType.AUTO && snippet && isArgsStory);

  const code = useSnippet ? snippet : sourceParameters.originalSource || "";

  const transformer =
    transformFromProps ??
    sourceParameters.transform ??
    sourceParameters.transformSource ?? // deprecated
    storyContext.parameters.docs?.transformSource ?? // deprecated
    storyContext.parameters.jsx?.transformSource; // deprecated - used to be implemented in the React renderer's jsxDecorator

  return transformer?.(code, storyContext) || code;
};
