// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },

  // Optimisations SEO et performance
  output: "static",
  build: {
    inlineStylesheets: "auto",
  },

  // Configuration pour le sitemap
  site: "https://sol-renov.com",

  // Compression et optimisation
  compressHTML: true,
});
