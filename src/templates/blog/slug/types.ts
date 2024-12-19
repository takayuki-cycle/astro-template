import type { AstroComponentFactory } from 'astro/runtime/server/index.js'

export type Props = {
  post: {
    ogImage: string
    ogImageAlt?: string | undefined
    title: string
  }
  pathName: string
  Content: AstroComponentFactory
}
