import { FC, useContext } from "react";
import { useOf, Story, DocsContext, SourceContext, useSourceProps } from "@storybook/blocks";

import { CanvasProps } from "./Canvas.types";
import { Preview as PurePreview } from "../Preview";

export const Canvas: FC<CanvasProps> = ({ of, source, sourceState, ...props }) => {
  const docsContext = useContext(DocsContext);
  const sourceContext = useContext(SourceContext);

  const { story } = useOf(of || "story", ["story"]);
  const sourceProps = useSourceProps({ ...source, ...(of && { of }) }, docsContext, sourceContext);

  return (
    <PurePreview
      {...props}
      isExpanded={sourceState === "shown"}
      withSource={sourceState === "none" ? undefined : sourceProps}
    >
      <Story of={of || story.moduleExport} meta={props.meta} {...props.story} __forceInitialArgs />
    </PurePreview>
  );
};
