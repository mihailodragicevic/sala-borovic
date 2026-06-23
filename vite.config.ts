import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Inline the main entry CSS into index.html so it is not a render-blocking
// request on the critical path. Route-level CSS chunks stay external (they are
// loaded together with their lazy JS chunks, after first paint).
const inlineEntryCss = (): Plugin => ({
  name: "inline-entry-css",
  apply: "build",
  enforce: "post",
  transformIndexHtml(html, ctx) {
    if (!ctx.bundle) return html;
    let result = html;
    const linkRegex = /<link[^>]*rel="stylesheet"[^>]*>/g;
    for (const link of html.match(linkRegex) ?? []) {
      const href = link.match(/href="([^"]+)"/)?.[1]?.replace(/^\//, "");
      if (!href) continue;
      const asset = ctx.bundle[href];
      if (asset && asset.type === "asset") {
        result = result.replace(link, `<style>${asset.source}</style>`);
        delete ctx.bundle[href];
      }
    }
    return result;
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "127.0.0.1",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), inlineEntryCss(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
}));
