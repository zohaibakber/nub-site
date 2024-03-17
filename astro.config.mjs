import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import db from "@astrojs/db";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://www.dispatchnub.com",
  integrations: [tailwind(), react(), db()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  })
});