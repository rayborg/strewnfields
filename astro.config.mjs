import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rayborg.github.io',
  base: '/strewnfields/',
  output: 'static',
  integrations: [sitemap()],
  vite: {
    build: { sourcemap: false },
  },
});
