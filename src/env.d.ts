/// <reference path="../.astro/types.d.ts" />
/// <reference types='astro/client' />

// `src/components/index.ts`の、error TS2307: Cannot find moduleを解決するために記載
declare module '*.astro' {
  import type { AstroComponentFactory } from 'astro'
  const Component: ReturnType<AstroComponentFactory>
  export default Component
}
