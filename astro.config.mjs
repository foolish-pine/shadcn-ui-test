// @ts-check
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  base: "/",
  prefetch: {
    prefetchAll: true,
  },
  server: {
    host: true,
    open: true,
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    robotsTxt(),
  ],
});
