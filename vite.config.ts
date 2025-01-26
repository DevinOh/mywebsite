import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      '@': "/src",
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  plugins: [react()],
  // SCSS 전역 사용
  css: {
    preprocessorOptions: {
        scss: {
            additionalData: `@use "@styles/main";`,
        },
    },
},
});

