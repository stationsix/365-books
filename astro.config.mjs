// @ts-check
import { defineConfig } from 'astro/config';
import rehypeBook from './src/plugins/rehype-book.mjs';

// https://astro.build/config
export default defineConfig({
  // The live site is https://stationsix.github.io/365-books/
  site: 'https://stationsix.github.io',
  base: '/365-books',
  markdown: {
    // Prompts are plain text, so skip code coloring and keep the HTML simple.
    syntaxHighlight: false,
    rehypePlugins: [rehypeBook],
  },
});
