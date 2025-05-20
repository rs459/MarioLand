const path = require("path");

// @see https://getbootstrap.com/docs/5.2/getting-started/vite/

export default {
  root: path.resolve(__dirname, "src"),
  server: {
    port: 8080,
    hot: true,
  },
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
};
