import { getCollection } from 'astro:content'
import type { GetStaticPathsOptions } from 'astro'

export const getPaginatedPaths = async (
  pathName: 'blog', // TODO: 他のパスを追加する場合は、ここに追加(例: 'blog' | 'authors')
  paginate: GetStaticPathsOptions['paginate'],
  pageSize = 1,
) => {
  const posts = await getCollection(pathName, ({ data }) => {
    const isDraft = 'isDraft' in data ? data.isDraft : false
    // 本番用にビルドするときにのみ、isDraft: trueを含むエントリーを除外
    return import.meta.env.PROD ? !isDraft : true
  })

  return paginate(posts, { pageSize: pageSize })
}

export const getCategories = async (
  pathName: 'blog', // TODO: 他のパスを追加する場合は、ここに追加(例: 'blog' | 'authors')
) => {
  const category = await getCollection(pathName, ({ data }) => {
    // 本番用にビルドするときにのみ、isDraft: trueを含むエントリーを除外
    return import.meta.env.PROD ? data.isDraft !== true : true
  }).then((posts) => posts.map((post) => post.data.categories))

  return category
}
