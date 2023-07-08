import { Meta } from "@storybook/react";

export const ALL_STORIES = Object.entries(import.meta.glob("stories/**/*.stories.tsx")).reduce<{
  [K in string]: () => Promise<{ default: Meta }>;
}>((record, [storyPath, module]) => {
  const storyFileName = storyPath.split("/").at(-1) || "";
  const [storyName] = storyFileName.split(".");

  return { ...record, [storyName]: module } as { [K in string]: () => Promise<{ default: Meta }> };
}, {});
