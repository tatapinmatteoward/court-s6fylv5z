import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://court-chronicles.pages.dev',
  build: {
    format: 'directory'
  }
});
