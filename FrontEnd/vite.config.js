import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const inlineStylesheet = {
  name: "inline-stylesheet",
  transformIndexHtml: {
    order: "post",
    handler(html, context) {
      const cssAssets = Object.values(context.bundle ?? {}).filter(
        (asset) => asset.type === "asset" && asset.fileName.endsWith(".css"),
      );

      if (cssAssets.length === 0) return html;

      const css = cssAssets
        .map((asset) =>
          typeof asset.source === "string"
            ? asset.source
            : new TextDecoder().decode(asset.source),
        )
        .join("\n");

      return html.replace(
        /<link rel="stylesheet"[^>]*>/,
        `<style>${css}</style>`,
      );
    },
  },
};

const preloadHeroImage = {
  name: "preload-hero-image",
  transformIndexHtml: {
    order: "post",
    handler(html, context) {
      const heroImage = Object.values(context.bundle ?? {}).find(
        (asset) => asset.type === "asset" && asset.fileName.includes("Banner1"),
      );

      if (!heroImage) return html;

      return html.replace(
        "</head>",
        `<link rel="preload" as="image" fetchpriority="high" href="/${heroImage.fileName}"></head>`,
      );
    },
  },
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), inlineStylesheet, preloadHeroImage],
  server: { port: 5173 },
});
