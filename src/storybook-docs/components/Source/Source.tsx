import { FC, lazy, useContext } from "react";
import { linkTo } from "@storybook/addon-links";
import { useDarkMode } from "storybook-dark-mode";
import { createElement } from "react-syntax-highlighter";
import { DocsContext, SourceContext } from "@storybook/blocks";
import { ThemeProvider, convert, themes } from "@storybook/theming";
import { SyntaxHighlighterRendererProps } from "@storybook/components";

// Constants
import { ALL_STORIES } from "constants/stories";

// Type
import { SourceProps } from "./Source.type";

// Hooks
import { useSourceProps } from "./Source.hooks";

// Style
import { SourceSkeletonPlaceholder, SourceSkeletonWrapper, StyledSyntaxHighlighter } from "./Source.style";

export const SourceSkeleton = () => (
  <SourceSkeletonWrapper>
    <SourceSkeletonPlaceholder />
    <SourceSkeletonPlaceholder style={{ width: "80%" }} />
    <SourceSkeletonPlaceholder style={{ width: "30%" }} />
    <SourceSkeletonPlaceholder style={{ width: "80%" }} />
  </SourceSkeletonWrapper>
);

const rowRenderer = (row: rendererNode): rendererNode => {
  const children: rendererNode[] | undefined = row.children?.map(({ properties, ...rest }, i) => {
    if (properties?.className.includes("tag") && properties?.className.includes("class-name")) {
      return {
        ...rest,
        tagName: Object.hasOwn(ALL_STORIES, rest?.children?.[0]?.value || "") ? "button" : "span",
        properties: {
          ...properties,
          onClick: async () => {
            const { default: stroy } = await ALL_STORIES[rest?.children?.[0]?.value || ""]();

            return linkTo(stroy?.title || "", "docs")();
          },
          style: { background: "none", border: "none", padding: 0, font: "inherit", cursor: "pointer" }
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

  const isDark = dark || useDarkMode();
  const overrideTheme = isDark ? themes.dark : themes.light;

  return (
    <ThemeProvider theme={convert(overrideTheme)}>
      <StyledSyntaxHighlighter
        bordered
        copyable
        format={format}
        renderer={Renderer}
        language={language || "tsx"}
        className="docblock-source sb-unstyled"
        {...rest}
      >
        {code}
      </StyledSyntaxHighlighter>
    </ThemeProvider>
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
