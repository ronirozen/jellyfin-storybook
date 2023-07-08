import * as path from "path";
import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import topLevelAwait from "vite-plugin-top-level-await";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // react({ jsxImportSource: "@emotion/react" })
    // {
    //   name: "singleHMR",
    //   handleHotUpdate({ modules }) {
    //     modules.map(m => {
    //       m.importedModules = new Set();
    //       m.importers = new Set();
    //     });
    //     return modules;
    //   }
    // }
    // topLevelAwait({
    //   // The export name of top-level await promise for each chunk module
    //   promiseExportName: "__tla",
    //   // The function to generate import names of top-level await promise in each chunk module
    //   promiseImportName: i => `__tla_${i}`
    // })
  ],
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
  },
  // build: {
  //   target: "esnext"
  // },
  esbuild: {
    supported: {
      "top-level-await": true //browsers can handle top-level-await features
    }
  }
});
