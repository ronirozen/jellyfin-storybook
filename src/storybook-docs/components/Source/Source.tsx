import { FC, useContext } from "react";
import { linkTo } from "@storybook/addon-links";
import { createElement } from "react-syntax-highlighter";
import { DocsContext, SourceContext } from "@storybook/blocks";
import { SyntaxHighlighterRendererProps } from "@storybook/components";

// Type
import { SourceProps } from "./Source.type";

// Constants
import { ALL_STORIES } from "constants/stories";

// Hooks
import { useSourceProps } from "./Source.hooks";

// Stories
import { SyntaxHighlighter } from "../SyntaxHighlighter";

// Style
import { SourceSkeletonPlaceholder, SourceSkeletonWrapper } from "./Source.style";

export const SourceSkeleton = () => (
  <SourceSkeletonWrapper>
    <SourceSkeletonPlaceholder />
    <SourceSkeletonPlaceholder style={{ width: "80%" }} />
    <SourceSkeletonPlaceholder style={{ width: "30%" }} />
    <SourceSkeletonPlaceholder style={{ width: "80%" }} />
  </SourceSkeletonWrapper>
);

const rowRenderer = (row: rendererNode): rendererNode => {
  const children: rendererNode[] | undefined = row.children?.map(({ properties, ...rest }) => {
    if (properties?.className.includes("tag") && properties?.className.includes("class-name")) {
      const isStory = Object.hasOwn(ALL_STORIES, rest?.children?.[0]?.value || "");
      return {
        ...rest,
        tagName: isStory ? "button" : "span",
        properties: {
          ...properties,
          onClick: async () => {
            if (!isStory) {
              return;
            }

            const { default: stroy } = await ALL_STORIES[rest?.children?.[0]?.value || ""]();

            return linkTo(stroy?.title || "", "docs")();
          },
          style: {
            padding: 0,
            border: "none",
            font: "inherit",
            background: "none",
            cursor: isStory ? "pointer" : "auto"
          }
        }
      };
    }
    return { ...rest, properties };
  });

  return { ...row, children };
};

const Renderer = ({ rows, stylesheet, useInlineStyles }: SyntaxHighlighterRendererProps) => {
  return rows.map((node: any, i: number) => {
    return createElement({
      useInlineStyles,
      node: rowRenderer(node),
      key: `code-segement${i}`,
      // @ts-expect-error (Converted from ts-ignore)
      stylesheet
    });
  });
};

export const StyledSource: FC<SourceProps> = ({
  code,
  dark,
  error,
  format,
  language,
  isLoading,
  ...rest
}) => {
  if (isLoading) {
    return <SourceSkeleton />;
  }

  return (
    <SyntaxHighlighter
      bordered
      copyable
      dark={dark}
      format={format}
      renderer={Renderer}
      language={language || "tsx"}
      className="docblock-source sb-unstyled"
      {...rest}
    >
      {code}
    </SyntaxHighlighter>
  );
};

/**
 * Story source doc block renders source code if provided,
 * or the source for a story if `storyId` is provided, or
 * the source for the current story if nothing is provided.
 */
export const Source: FC<SourceProps> = props => {
  const sourceContext = useContext(SourceContext);
  const docsContext = useContext(DocsContext);
  const { state, ...sourceProps } = useSourceProps(props, docsContext, sourceContext);
  return <StyledSource {...sourceProps} />;
};
