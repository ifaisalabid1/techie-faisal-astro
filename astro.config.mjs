import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import { remarkReadingTime } from './remark-reading-time.mjs'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  site: 'https://techiefaisal.com',
  trailingSlash: 'always',
  prefetch: {
    defaultStrategy: 'viewport'
  },
  integrations: [
    svelte(),
    tailwind({
      applyBaseStyles: false
    }),
    sitemap(),
    mdx()
  ],

  markdown: {
    remarkPlugins: [remarkReadingTime]
  }
})
