import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  resolve: {
    tsconfigPaths: true,
    alias: {
      // 2. This tells Vite that "@" points to your "app" folder
      "@": path.resolve(__dirname, "./app"),
    },
  },
});
