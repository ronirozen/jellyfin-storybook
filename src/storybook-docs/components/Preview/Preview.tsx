import { global } from "@storybook/global";
import { ActionBar, Zoom } from "@storybook/components";
import { useCallback, useState, ClipboardEvent, FC } from "react";

// Context
import { ZoomContext } from "storybook-docs/contexts/ZoomContext";

// Preview
import { PreviewProps } from "./Preview.type";
import { getSource, getStoryId } from "./Preview.utils";
import { ChildrenContainer, PositionedToolbar, PreviewContainer, Relative } from "./Preview.style";

/**
 * A preview component for showing one or more component `Story`
 * items. The preview also shows the source for the component
 * as a drop-down.
 */
export const Preview: FC<PreviewProps> = ({
  columns,
  isColumn,
  children,
  isLoading,
  className,
  withSource,
  isExpanded,
  withToolbar,
  additionalActions,
  layout = "padded",
  ...props
}) => {
  const [scale, setScale] = useState(1);
  const [expanded, setExpanded] = useState(isExpanded);

  const { source, actionItem } = getSource(setExpanded, expanded, withSource);
  const previewClasses = [className, "sbdocs", "sbdocs-preview", "sb-unstyled"];

  const defaultActionItems = withSource ? [actionItem] : [];
  const [additionalActionItems, setAdditionalActionItems] = useState(
    additionalActions ? [...additionalActions] : []
  );
  const actionItems = [...defaultActionItems, ...additionalActionItems];

  const { window: globalWindow } = global;

  const copyToClipboard = useCallback(async (text: string) => {
    const { createCopyToClipboardFunction } = await import("@storybook/components");
    createCopyToClipboardFunction();
  }, []);

  const onCopyCapture = (e: ClipboardEvent<HTMLInputElement>) => {
    // When the selection range is neither empty nor collapsed, we can assume
    // user's intention is to copy the selected text, instead of the story's
    // code snippet.
    const selection: Selection | null = globalWindow.getSelection();
    if (selection && selection.type === "Range") {
      return;
    }

    e.preventDefault();
    if (additionalActionItems.filter(item => item.title === "Copied").length === 0) {
      copyToClipboard(source?.props.code).then(() => {
        setAdditionalActionItems([
          ...additionalActionItems,
          {
            title: "Copied",
            onClick: () => {}
          }
        ]);
        globalWindow.setTimeout(
          () => setAdditionalActionItems(additionalActionItems.filter(item => item.title !== "Copied")),
          1500
        );
      });
    }
  };

  return (
    <PreviewContainer {...{ withSource, withToolbar }} {...props} className={previewClasses.join(" ")}>
      {withToolbar && (
        <PositionedToolbar
          border
          isLoading={isLoading}
          baseUrl="./iframe.html"
          resetZoom={() => setScale(1)}
          storyId={getStoryId(children)}
          zoom={(z: number) => setScale(scale * z)}
        />
      )}
      <ZoomContext.Provider value={{ scale }}>
        <Relative className="docs-story" onCopyCapture={withSource && onCopyCapture}>
          <ChildrenContainer
            layout={layout}
            columns={columns}
            isColumn={isColumn || !Array.isArray(children)}
          >
            <Zoom.Element scale={scale}>
              {Array.isArray(children) ? (
                // eslint-disable-next-line react/no-array-index-key
                children.map((child, i) => <div key={i}>{child}</div>)
              ) : (
                <div>{children}</div>
              )}
            </Zoom.Element>
          </ChildrenContainer>
          <ActionBar actionItems={actionItems} />
        </Relative>
      </ZoomContext.Provider>
      {withSource && expanded && source}
    </PreviewContainer>
  );
};

export default Preview;
