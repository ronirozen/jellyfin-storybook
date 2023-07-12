import * as path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      utils: path.resolve("src/utils"),
      hooks: path.resolve("src/hooks"),
      icons: path.resolve("src/icons"),
      style: path.resolve("src/style"),
      stories: path.resolve("src/stories"),
      constants: path.resolve("src/constants"),
      "storybook-docs": path.resolve("src/storybook-docs")
    }
  }
});
