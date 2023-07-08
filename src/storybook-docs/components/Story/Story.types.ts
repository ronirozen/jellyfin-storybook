import { ModuleExport } from "@storybook/types";

export type StoryProps = {
  of: ModuleExport;
  expanded?: boolean;
  withToolbar?: boolean;
};
