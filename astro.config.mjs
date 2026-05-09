import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  site: 'https://tabassumfoundation.github.io',
  base: isProd ? '/tabassum-foundation' : '/',
  output: 'static',
  integrations: [tailwind()],
  image: {
    // Enable image optimization
    domains: ['tabasumfoundation.org', 'aliceblue-otter-844335.hostingersite.com'],
  },
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro']
          }
        }
      }
    }
  }
});
