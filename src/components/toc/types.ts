import type { MarkdownHeading } from 'astro'

export interface TocProps {
  headings: MarkdownHeading[]
  ListTag?: ListTag
}

export type ListTag = 'ol' | 'ul'

export interface ExtendHeading extends MarkdownHeading {
  children: ExtendHeading[]
  number: string
}
