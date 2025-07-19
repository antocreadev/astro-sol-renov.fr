// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  // Adaptateur Vercel pour le rendu côté serveur
  adapter: vercel({}),

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
