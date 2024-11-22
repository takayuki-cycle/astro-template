import { BASE_URL, SITE } from '@/constants/url'
import type { APIRoute } from 'astro'

const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${new URL('sitemap-index.xml', `${SITE}${BASE_URL}`).href}
`.trim()

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  })
}
