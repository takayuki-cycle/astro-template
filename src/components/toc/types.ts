import type { MarkdownHeading } from 'astro'

export interface TOCProps {
  headings: MarkdownHeading[]
  ListTag?: ListTag
  maxDepth?: MaxDepth
}

export type ListTag = 'ol' | 'ul'

export type MaxDepth = 1 | 2 | 3 | 4 | 5 // 例: 4であれば、h2タグ~h5タグまでの見出しを表示

export interface ExtendHeading extends MarkdownHeading {
  children: ExtendHeading[]
  number: string
}
