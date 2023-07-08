import { ComponentProps } from "react";
import { SourceType } from "@storybook/docs-tools";
import { SourceContextProps } from "@storybook/blocks";
import { DocsContextProps, PreparedStory } from "@storybook/types";

// Hooks
import { useStories } from "storybook-docs/hooks/useStory";
import { useArgsList } from "storybook-docs/hooks/useArgs";

// Source
import { StyledSource } from "./Source";
import { getSnippet, getSourceState, getStorySource } from "./Source.utils";
import { SourceError, SourceParameters, SourceProps, SourceState, SourceStateProps } from "./Source.type";

export const useSourceProps = (
  props: SourceProps,
  docsContext: DocsContextProps<any>,
  sourceContext: SourceContextProps
): ComponentProps<typeof StyledSource> & SourceStateProps => {
  const storyIds = props.ids || (props.id ? [props.id] : []);
  const storiesFromIds = useStories(storyIds, docsContext);

  // The check didn't actually change the type.
  let stories: PreparedStory[] = storiesFromIds as PreparedStory[];
  const { of } = props;
  if ("of" in props && of === undefined) {
    throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  }

  if (of) {
    const resolved = docsContext.resolveOf(of, ["story"]);
    stories = [resolved.story];
  } else if (stories.length === 0) {
    try {
      // Always fall back to the primary story for source parameters, even if code is set.
      stories = [docsContext.storyById()];
    } catch (err) {
      // You are allowed to use <Source code="..." /> and <Canvas /> unattached.
    }
  }
  const argsFromStories = useArgsList(stories, docsContext);

  if (!storiesFromIds.every(Boolean)) {
    return { error: SourceError.SOURCE_UNAVAILABLE, state: SourceState.NONE };
  }

  const sourceParameters = (stories[0]?.parameters?.docs?.source || {}) as SourceParameters;
  let { code } = props; // We will fall back to `sourceParameters.code`, but per story below
  let format = props.format ?? sourceParameters.format;
  const language = props.language ?? sourceParameters.language ?? "jsx";
  const dark = props.dark ?? sourceParameters.dark ?? false;

  if (!code) {
    code = stories
      .map((story, index) => {
        // In theory you can use a storyId from a different CSF file that hasn't loaded yet.
        if (!story) return "";

        // NOTE: args *does* have to be defined here due to the null check on story above
        const [args] = argsFromStories[index] || [{}];
        const storyContext = docsContext.getStoryContext(story);

        // eslint-disable-next-line no-underscore-dangle
        const argsForSource = props.__forceInitialArgs ? storyContext.initialArgs : args;

        const source = getStorySource(story.id, argsForSource, sourceContext);
        if (index === 0) {
          // Take the format from the first story
          format = source.format ?? story.parameters.docs?.source?.format ?? false;
        }
        return getSnippet({
          snippet: source.code,
          transformFromProps: props.transform,
          typeFromProps: props.type || SourceType.AUTO,
          storyContext: { ...storyContext, args: argsForSource }
        });
      })
      .join("\n\n");
  }

  const state = getSourceState(stories as PreparedStory[]);

  return code
    ? {
        code,
        format,
        language,
        dark,
        // state is used by the Canvas block when it calls this function
        state
      }
    : { error: SourceError.SOURCE_UNAVAILABLE, state };
};
