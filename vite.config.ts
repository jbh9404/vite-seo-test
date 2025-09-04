import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vitePrerenderPlugin } from "vite-prerender-plugin";
// import path from "path";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    react(),
    vitePrerenderPlugin({
      renderTarget: "#root",
      // prerenderScript: path.resolve(__dirname, "prerender.ts"),
      additionalPrerenderRoutes: ["/setting", "/contact"],
    }),
  ],
});
