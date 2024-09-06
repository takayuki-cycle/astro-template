import { css } from '@/../styled-system/css'
import type { ExtendHeading, ListTag, MaxDepth, TOCProps } from '@/components/toc/types'
import { groupHeadings } from '@/components/toc/utils.ts'

// 再帰的に見出しをレンダリングする関数
const renderHeadings = (
  extendHeadings: ExtendHeading[],
  ListTag: ListTag,
  maxDepth: MaxDepth,
  depth = 1,
) => {
  if (depth > maxDepth) {
    return null
  }

  return (
    <ListTag
      className={css({
        pl: '5',
      })}
    >
      {extendHeadings.map((heading) => (
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
          {heading.children?.length > 0 &&
            renderHeadings(heading.children, ListTag, maxDepth, depth + 1)}
        </li>
      ))}
    </ListTag>
  )
}

// Table of Contents(目次)
export const TOC = ({ headings, ListTag = 'ol', maxDepth = 3 }: TOCProps) => {
  const groupedHeadings = groupHeadings(headings)

  return (
    headings[0] && (
      <div
        className={css({
          display: 'flex',
          flexDir: 'column',
          rowGap: '4',
        })}
      >
        <p>目次</p>
        <nav aria-label='目次'>{renderHeadings(groupedHeadings, ListTag, maxDepth)}</nav>
      </div>
    )
  )
}
