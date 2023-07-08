import { useContext, FC } from "react";
import { Controls, Description, DocsContext } from "@storybook/blocks";

import { Story } from "../Story";
import { Heading } from "../Heading";

export const Stories: FC = (): JSX.Element => {
  const { componentStories } = useContext(DocsContext);

  const stories = componentStories().filter(story => !story.parameters?.docs?.disable);

  return (
    <>
      <Description />
      <Story key={stories[0].id} of={stories[0].moduleExport} withToolbar />
      <Controls />
      <Heading>{"Stories"}</Heading>
      {stories.map(story => (
        <Story key={story.id} of={story.moduleExport} expanded />
      ))}
    </>
  );
};
