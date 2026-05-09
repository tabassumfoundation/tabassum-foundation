import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://tabassum-foundation.vercel.app',
  base: '/',
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
