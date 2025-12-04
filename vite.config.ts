import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { ssr } from "vite-plugin-ssr/plugin";

export default defineConfig({
  plugins: [react(), tailwindcss(), ssr({ prerender: true })],
});
