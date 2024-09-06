import type { ExtendHeading } from '@/components/toc/types'
import type { MarkdownHeading } from 'astro'

// 見出しをグループ化する関数
export const groupHeadings = (markdownHeadings: MarkdownHeading[]) => {
  const grouped: ExtendHeading[] = []
  const stack = [{ children: grouped, depth: 0, number: '' }]

  for (const markdownHeading of markdownHeadings) {
    while (markdownHeading.depth <= (stack[stack.length - 1]?.depth ?? 0)) {
      stack.pop()
    }
    const parent = stack[stack.length - 1]
    if (parent) {
      const number = parent.number
        ? `${parent.number}-${parent.children.length + 1}`
        : `${parent.children.length + 1}`
      const entry: ExtendHeading = { ...markdownHeading, children: [], number }
      parent.children.push(entry)
      stack.push(entry)
    }
  }

  return grouped
}
