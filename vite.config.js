import handlebars from "@vituum/vite-plugin-handlebars";
import postcss from "@vituum/vite-plugin-postcss";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import vituum from "vituum";

export default defineConfig({
  plugins: [
    vituum(),
    handlebars({
      partials: {
        directory: "src/components",
        extname: false,
      },
    }),
    postcss({
      autoprefixer: {
        overrideBrowserslist: ["last 2 versions", "> 1%"],
      },
    }),
    ViteImageOptimizer({}),
  ],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: (source, filename) => {
          if (filename.replaceAll("\\", "/").endsWith("/src/scss/vars.scss")) {
            return source;
          }
          return `@use "/src/scss/vars.scss" as *;\n${source}`;
        },
      },
    },
  },
});
