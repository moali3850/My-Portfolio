import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// base './' lets the built site work on GitHub Pages without extra config
export default defineConfig({
  base: "/My-Portfolio/",
  plugins: [react(), tailwindcss()],
});
