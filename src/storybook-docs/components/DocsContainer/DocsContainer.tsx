import { useEffect } from "react";
import { themes } from "@storybook/theming";
import { MDXProvider } from "@mdx-js/react";
import { useDarkMode } from "storybook-dark-mode";
import { DocsContainer as BaseContainer } from "@storybook/addon-docs";

import { Canvas } from "../Canvas";

export const DocsContainer: typeof BaseContainer = ({ children, context }) => {
  const dark = useDarkMode();

  useEffect(() => {
    // @ts-ignore
    const { darkClass, lightClass } = context.store.projectAnnotations.parameters.darkMode;
    const [addClass, removeClass] = dark ? [darkClass, lightClass] : [lightClass, darkClass];
    document.body.classList.remove(removeClass);
    document.body.classList.add(addClass);
  }, [dark]);

  return (
    <MDXProvider
      components={{
        canvas: Canvas
      }}
    >
      <BaseContainer context={context} theme={dark ? themes.dark : themes.light}>
        {children}
      </BaseContainer>
    </MDXProvider>
  );
};
