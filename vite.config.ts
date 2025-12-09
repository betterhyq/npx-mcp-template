import { defineConfig } from "vite";

export default defineConfig({
  build: {
    ssr: true,
    target: "node24",
    rollupOptions: {
      input: "./node/main.ts",
      output: {
        format: "es",
        dir: "./node/dist",
        entryFileNames: "sse-mcp-servers.js",
      },
      // 不外部化任何模块，让 Vite 打包所有依赖（包括 Node.js 内置模块）
      external: () => false,
    },
  },
});
