import type { CollectionEntry } from 'astro:content'

export interface PageProps {
  data: CollectionEntry<'blog'>[]
  total: number
  size: number
  currentPage: number
  lastPage: number
}

export interface PathNameProps {
  pathName: string
  categoryPathName: `${string}/${string}`
}
