import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tathianemantovani.github.io',
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
});
