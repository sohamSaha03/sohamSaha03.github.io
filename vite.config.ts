import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  //base: "/Portfolio/",  //This is where the repo name goes
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), 
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }, 
  // ← add this:
  assetsInclude: ["**/*.PNG"],
}));
