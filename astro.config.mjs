// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  // Adaptateur pour le rendu côté serveur
  adapter: node({
    mode: "standalone",
  }),

  vite: {
    plugins: [tailwindcss()],
  },

  // Optimisations SEO et performance
  output: "server", // Permet le rendu côté serveur
  build: {
    inlineStylesheets: "auto",
  },

  // Configuration pour le sitemap
  site: "https://sol-renov.com",

  // Compression et optimisation
  compressHTML: true,
});
