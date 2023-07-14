import type { StorybookConfig } from "@storybook/react-vite";
const config: StorybookConfig = {
  addons: [
    "storybook-dark-mode",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-links",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-styling",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  staticDirs: [
    {
      to: "/assets",
      from: "../assets"
    }
  ],
  stories: ["../src/**/*.mdx", "../src/**/*.stories.*"]
};
export default config;
