import { getCollection } from 'astro:content'
import type { GetStaticPathsOptions } from 'astro'

const sortByPublishDateDesc = (
  a: { data: { publishDate: string } },
  b: { data: { publishDate: string } }
) => {
  const dateA = new Date(a.data.publishDate).getTime()
  const dateB = new Date(b.data.publishDate).getTime()

  return dateB - dateA
}

export const getPaginatedPaths = async (
  pathName: 'blog', // TODO: 他のパスを追加する場合は、ここに追加(例: 'blog' | 'authors')
  paginate: GetStaticPathsOptions['paginate'],
  pageSize = 1
) => {
  const posts = await getCollection(pathName, ({ data }) => {
    // 本番用にビルドするときにのみ、isDraft: trueを含むエントリーを除外
    return import.meta.env.PROD ? data.isDraft !== true : true
  }).then((collection) => collection.sort(sortByPublishDateDesc))

  return paginate(posts, { pageSize: pageSize })
}

export const getCategoryPaginatedPaths = async (
  pathName: 'blog', // TODO: 他のパスを追加する場合は、ここに追加(例: 'blog' | 'authors')
  paginate: GetStaticPathsOptions['paginate'],
  pageSize = 1
) => {
  const posts = await getCollection(pathName, ({ data }) => {
    // 本番用にビルドするときにのみ、isDraft: trueを含むエントリーを除外
    return import.meta.env.PROD ? data.isDraft !== true : true
  }).then((collection) => collection.sort(sortByPublishDateDesc))
  const category = posts
    .map((post) => post.data.categories)
    .filter((categories): categories is string[] => categories !== undefined)
    .flat()

  return category.flatMap((categorySlug) => {
    const filteredPosts = posts.filter((post) => {
      return post.data.categories?.includes(categorySlug)
    })
    return paginate(filteredPosts, {
      params: { categorySlug },
      pageSize: pageSize
    })
  })
}

export const getSlugPath = async (
  pathName: 'blog' // TODO: 他のパスを追加する場合は、ここに追加(例: 'blog' | 'authors')
) => {
  const posts = await getCollection(pathName, ({ data }) => {
    // 本番用にビルドするときにのみ、isDraft: trueを含むエントリーを除外
    return import.meta.env.PROD ? data.isDraft !== true : true
  })

  return posts.map((post) => ({
    params: { slug: post.id },
    props: post
  }))
}

export const getCategories = async (
  pathName: 'blog' // TODO: 他のパスを追加する場合は、ここに追加(例: 'blog' | 'authors')
) => {
  const category = await getCollection(pathName, ({ data }) => {
    // 本番用にビルドするときにのみ、isDraft: trueを含むエントリーを除外
    return import.meta.env.PROD ? data.isDraft !== true : true
  }).then((posts) => posts.map((post) => post.data.categories))

  return category
}

export const getAuthor = async (authorID: string | undefined) => {
  const authors = await getCollection('authors')
  const author = authors.find((author) => author.id === authorID)?.data
  const authorNameParts = [
    author?.name.last.formal,
    author?.name.middle.formal,
    author?.name.first.formal
  ].filter(Boolean)
  const authorName = authorNameParts.join(' ')

  return { author, authorName }
}
