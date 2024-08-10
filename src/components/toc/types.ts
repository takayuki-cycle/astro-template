import type { MarkdownHeading } from 'astro'

export interface TocProps {
  headings: MarkdownHeading[]
}

export interface ExtendHeading extends MarkdownHeading {
  children: ExtendHeading[]
  number: string
}
