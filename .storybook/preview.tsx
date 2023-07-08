import React from "react";
import { themes } from "@storybook/theming";
import type { Preview } from "@storybook/react";

import { buildPathOfComponents } from "../src/utils";
import { Stories, DocsContainer } from "../src/storybook-docs/components";
import { themeProviderDecorators } from "../src/storybook-docs/style/theme";

const preview: Preview = {
  parameters: {
    darkMode: {
      dark: themes.dark,
      light: themes.light
    },
    backgrounds: { disable: true },
    docs: {
      source: {
        transform: (code: string) => buildPathOfComponents(code) + "\n\n" + code
      },
      container: DocsContainer,
      page: () => <Stories />
    },
    layout: "centered",
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    options: {
      showPanel: true
      // storySort: (story1, story2) =>
      //   (story2.title.match(/\//g) || []).length - (story1.title.match(/\//g) || []).length
    }
  },
  decorators: [themeProviderDecorators]
};

export default preview;
