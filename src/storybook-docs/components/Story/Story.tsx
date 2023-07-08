import { FC, PropsWithChildren } from "react";
import { useOf, Anchor, Subheading, Description } from "@storybook/blocks";

import { Canvas } from "../Canvas/Canvas";
import { StoryProps } from "./Story.types";

export const Story: FC<PropsWithChildren<StoryProps>> = ({ of, expanded, withToolbar: withToolbarProp }) => {
  const { story } = useOf(of || "story", ["story"]);

  // use withToolbar from parameters or default to true in autodocs
  const withToolbar = story.parameters.docs?.canvas?.withToolbar ?? withToolbarProp;

  return (
    <Anchor storyId={story.id}>
      {expanded && (
        <>
          <Subheading>{story.name}</Subheading>
          <Description of={of} />
        </>
      )}
      <Canvas of={of} withToolbar={withToolbar} />
    </Anchor>
  );
};
