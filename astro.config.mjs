import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],

  build: {
    inlineStylesheets: 'always' 
  },

  image: {
    // إخبار Astro بأن هذا النطاق آمن، اسحب منه الصور وخزنها مؤقتاً عندنا
    domains: ['pub-8dda25e2267049d98f8e98a0237e7096.r2.dev']
  },

  adapter: cloudflare()
});