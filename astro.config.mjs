import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-template-gules-seven.vercel.app',
  trailingSlash: 'always',
  integrations: [react(), sitemap(), mdx()],
  output: 'server',
  adapter: vercel()
})
