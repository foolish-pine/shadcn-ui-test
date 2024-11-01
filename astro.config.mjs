// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import robotsTxt from "astro-robots-txt";
import tailwind from '@astrojs/tailwind';

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
  integrations: [react(), tailwind({
    applyBaseStyles: false,
  }), sitemap(), robotsTxt()]
});
