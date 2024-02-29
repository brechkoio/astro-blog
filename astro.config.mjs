import { defineConfig } from 'astro/config';
import markdownIntegration from '@astropub/md'
import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), markdownIntegration()],
  adapter: netlify()
});