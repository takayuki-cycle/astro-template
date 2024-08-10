import { css } from '@/../styled-system/css'
import type { ExtendHeading, ListTag, TocProps } from '@/components/toc/types'
import type { MarkdownHeading } from 'astro'

// 見出しをグループ化する関数
const groupHeadings = (markdownHeadings: MarkdownHeading[]) => {
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

// 再帰的に見出しをレンダリングする関数
const renderHeadings = (extendHeadings: ExtendHeading[], ListTag: ListTag, depth = 1) => {
  const MAX_DEPTH = 3

  if (depth > MAX_DEPTH) {
    return null
  }

  return extendHeadings.map((heading) => (
    <li key={heading.slug}>
      <a
        href={`#${heading.slug}`}
        className={css(
          ListTag === 'ol' && {
            _before: {
              pr: '2',
              content: 'attr(data-number)',
            },
          },
        )}
        {...(ListTag === 'ol' && { 'data-number': `${heading.number}:` })}
      >
        {heading.text}
      </a>
      {heading.children?.length > 0 && (
        <ListTag
          className={css({
            pl: '5',
          })}
        >
          {renderHeadings(heading.children, ListTag, depth + 1)}
        </ListTag>
      )}
    </li>
  ))
}

// Table of Contents(目次)
export const Toc = ({ headings, ListTag = 'ol' }: TocProps) => {
  const groupedHeadings = groupHeadings(headings)

  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        rowGap: '4',
      })}
    >
      <p>目次</p>
      <nav aria-label='目次'>
        <ListTag>{renderHeadings(groupedHeadings, ListTag)}</ListTag>
      </nav>
    </div>
  )
}
