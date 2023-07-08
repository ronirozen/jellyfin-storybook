import { addons } from "@storybook/manager-api";

import { StorybookTheme } from "../src/storybook-docs/style/storybook-theme";

const link = document.createElement("link");

link.setAttribute("rel", "shortcut icon");
link.setAttribute("href", "../assets/favicon.ico");

document.head.appendChild(link);

addons.setConfig({
  theme: StorybookTheme
});
