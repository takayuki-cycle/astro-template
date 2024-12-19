import type { CollectionEntry } from 'astro:content'

export interface Props {
  pathName: string
  categoryPathName?: `${string}/${string}`
  page: {
    data: CollectionEntry<'blog'>[]
    total: number
    size: number
    currentPage: number
    lastPage: number
  }
}

// TODO: 上記のPropsでエラーが出るようであれば、昔書いた以下のコードへ置き換えてください。
// export interface PageProps {
//   data: CollectionEntry<'blog'>[]
//   total: number
//   size: number
//   currentPage: number
//   lastPage: number
// }

// export interface PathNameProps {
//   pathName: string
//   categoryPathName: `${string}/${string}`
// }
