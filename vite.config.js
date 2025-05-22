import { deprecations } from "sass";

const path = require("path");

// @see https://getbootstrap.com/docs/5.2/getting-started/vite/

export default {
  root: path.resolve(__dirname, "src"),
  base: "/MarioLand/",
  server: {
    port: 8080,
    hot: true,
  },
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or "modern"
        silenceDeprecations: [
          "mixed-decls",
          "color-functions",
          "global-builtin",
          "import",
        ],
      },
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "src/index.html"),
        contact: path.resolve(__dirname, "src/contact.html"),
        photos: path.resolve(__dirname, "src/photos.html"),
        tarif: path.resolve(__dirname, "src/tarifs.html"),
        mentionsLegales: path.resolve(__dirname, "src/mentions-legales.html"),
        // Add other entry points if needed
      },
    },
  },
};
