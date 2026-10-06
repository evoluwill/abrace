import { defineConfig } from "vite";
import { minify } from "html-minifier-terser";
import { cpSync } from "node:fs";
import { fileURLToPath } from "node:url";

const caminho = (arquivo) =>
  fileURLToPath(new URL(arquivo, import.meta.url));

export default defineConfig({
  base: "./",

  build: {
    outDir: "dist",
    minify: true,
    cssMinify: true,
    assetsInlineLimit: 0,

    rolldownOptions: {
      input: caminho("./html/index.html"),
    },
  },

  plugins: [
    {
      name: "minificar-html",
      apply: "build",

      transformIndexHtml: {
        order: "post",

        async handler(html) {
          return minify(html, {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
          });
        },
      },
    },

    {
      name: "copiar-imagens",
      apply: "build",

      closeBundle() {
        cpSync(
          caminho("./imagens"),
          caminho("./dist/imagens"),
          { recursive: true }
        );
      },
    },
  ],
});