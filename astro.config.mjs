import markdoc from '@astrojs/markdoc'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import keystatic from '@keystatic/astro'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  prefetch: true,
  compressHTML: true,
  output: 'hybrid',
  integrations: [mdx(), sitemap(), tailwind(), markdoc(), react(), keystatic()],
})
