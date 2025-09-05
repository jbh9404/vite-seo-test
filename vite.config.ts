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
      // prerender를 실행할 스크립트 파일의 경로 (절대 경로)
      prerenderScript: "./prerender.ts",
      // 미리 prerender할 경로 목록을 추가할 수 있습니다.
      // prerenderScript에서 링크를 찾아 자동 추가하지만,
      // 링크가 없는 페이지(예: /404)를 추가할 때 유용합니다.
      additionalPrerenderRoutes: ["/", "contact", "setting"],
    }),
  ],
});
