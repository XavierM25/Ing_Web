// @ts-check
import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import auth from 'auth-astro';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output:'server',
  adapter: vercel(),
  integrations: [tailwind(), react(), auth()],
  vite: {
    ssr: {
      noExternal: ['react-easy-crop']
    }
  }
});