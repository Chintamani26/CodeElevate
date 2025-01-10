import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      "@codemirror/lang-python",
      "@babel/runtime/helpers/extends"
    ],
  },
  build: {
    rollupOptions: {
      external: ['@babel/runtime/helpers/extends'],
    },
  },
});