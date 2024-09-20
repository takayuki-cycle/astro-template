import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://takayukiMoto-arsaga.github.io',
  base: '/astro-boilerplate/', // GitHub Pagesのために記載
  trailingSlash: 'ignore', // v5.0.0-beta.1で'always'にするとImageコンポーネントの画像が表示されなくなるため、'ignore'にします。
  integrations: [react(), sitemap(), mdx()],
})
