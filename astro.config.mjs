import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
  site: 'https://main.d2869e33y4q9qp.amplifyapp.com',
  trailingSlash: 'always',
  integrations: [react(), sitemap(), mdx()],
  output: 'static',
  adapter: vercel()
})
