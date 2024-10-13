// @ts-check
import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import auth from 'auth-astro';

// https://astro.build/config
export default defineConfig({
  output:'server',
  adapter: node({mode:'standalone'}),
  integrations: [tailwind(), react(), auth()],

});