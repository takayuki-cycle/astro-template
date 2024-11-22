// undefinedを除外して、すべての要素がstring[]である新しい配列を作成
export const getValidCategories = (categories: (string[] | undefined)[]): string[][] =>
  categories.filter((item): item is string[] => item !== undefined)

// カテゴリデータをフラット化し、各カテゴリの出現回数を集計
export const getCategoryCount = (categories: string[][]): Record<string, number> =>
  categories.flat().reduce(
    (acc, category) => {
      acc[category] = (acc[category] || 0) + 1
      return acc
    },
    {} as Record<string, number>
  )

// カテゴリをアルファベット順（日本語ロケール対応）にソートし、「カテゴリ名(出現回数)」形式のリストを生成
export const getCategoryList = (categoryCount: Record<string, number>): [string, number][] =>
  Object.entries(categoryCount).sort(([a], [b]) =>
    a.localeCompare(b, 'ja', { sensitivity: 'base' })
  )
