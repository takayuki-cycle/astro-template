declare module '*.astro' {
  import type { AstroComponentFactory } from 'astro'
  const Component: ReturnType<AstroComponentFactory>
  export default Component
}
