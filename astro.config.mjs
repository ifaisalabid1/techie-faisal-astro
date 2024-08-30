import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import { remarkReadingTime } from './remark-reading-time.mjs'
import { SITE_URL } from '$lib/const.ts'

export default defineConfig({
  site: { SITE_URL },
  trailingSlash: 'always',
  prefetch: {
    defaultStrategy: 'viewport'
  },

  integrations: [
    svelte(),
    tailwind({
      applyBaseStyles: false
    }),
    sitemap()
  ],

  markdown: {
    remarkPlugins: [remarkReadingTime]
  }
})
