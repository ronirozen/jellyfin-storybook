import { useEffect } from "react";
import { useGlobals } from "@storybook/addons";
import { ReactRenderer } from "@storybook/react";
import type { PartialStoryFn as StoryFunction, StoryContext } from "@storybook/types";

export const Outline = (StoryFn: StoryFunction<ReactRenderer>, context: StoryContext<ReactRenderer>) => {
  const [_, updateGlobals] = useGlobals();
  const isInDocs = context.viewMode === "docs";
  const isActive = [true, "true"].includes(context.globals["outline"]);

  useEffect(() => {
    if (!isInDocs) {
      updateGlobals({ outline: true });
    }

    return () => {
      if (!isInDocs) {
        updateGlobals({ outline: isActive });
      }
    };
  }, []);

  return StoryFn();
};
