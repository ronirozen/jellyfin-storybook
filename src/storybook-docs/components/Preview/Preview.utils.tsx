import { Children, ReactElement, ReactNode } from "react";

import { SourceStateProps, StyledSource, SourceItem } from "storybook-docs/components/Source";

export const getSource = (
  setExpanded: Function,
  expanded?: boolean,
  withSource?: SourceStateProps
): SourceItem => {
  switch (true) {
    case !!(withSource && withSource?.error): {
      return {
        actionItem: {
          disabled: true,
          title: "No code available",
          onClick: () => setExpanded(false),
          className: "docblock-code-toggle docblock-code-toggle--disabled"
        }
      };
    }
    case expanded: {
      return {
        source: <StyledSource {...withSource} />,
        actionItem: {
          title: "Hide code",
          onClick: () => setExpanded(false),
          className: "docblock-code-toggle docblock-code-toggle--expanded"
        }
      };
    }
    default: {
      return {
        source: <StyledSource {...withSource} />,
        actionItem: {
          title: "Show code",
          onClick: () => setExpanded(true),
          className: "docblock-code-toggle"
        }
      };
    }
  }
};

export const getStoryId = (children: ReactNode) => {
  if (Children.count(children) === 1) {
    const elt = children as ReactElement;
    if (elt.props) {
      return elt.props.id;
    }
  }
  return null;
};
