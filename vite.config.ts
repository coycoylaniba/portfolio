// @ts-expect-error "No type declaration"
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // @ts-expect-error "No type declaration"
      "~": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    TanStackRouterVite({ target: "react" }),
    react(),
    tailwindcss(),
    svgr(),
  ],
});
