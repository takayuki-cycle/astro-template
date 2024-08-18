import { defineCollection, reference, z } from 'astro:content'

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1).max(60), // 記事のタイトル
    description: z.string().min(1).max(160), // 記事の説明
    robots: z
      .enum([
        '', // <meta name='robots'>を削除します。(削除のときは、allを記載したことと同じ効果になります。)
        'all', // インデックスされ、リンクがたどられます。（デフォルトの動作のため、<meta name='robots'>は削除します。）(index, followと同じです。)
        'index', // ページを検索エンジンのインデックスに含めることを指示します。
        'noindex', // ページを検索エンジンのインデックスに含めないことを指示します。
        'follow', // ページ内のリンクをたどってインデックスすることを指示します。
        'nofollow', // ページ内のリンクをたどらないことを指示します。
        'none', // 'noindex'と'nofollow'の両方を指示します。
        'noarchive', // ページのキャッシュを保存しないことを指示します。
        'nosnippet', // 検索結果にスニペット（ページ内容の要約）を表示しないことを指示します。
        'index, nofollow',
        'noindex, follow',
      ])
      .optional()
      .default(''),
    ogImage: z
      .string()
      .optional()
      .refine((value) => {
        if (!value) return true // 値が存在しない場合はバリデーション成功
        return /^\/.*\.(webp|jpg|jpeg|png|avif)$/.test(value) // '/'で始まり、画像の拡張子（.webp, .jpg, .jpeg, .png, .avif）で終了
      })
      .default('/ogp/general.webp'), // ヒーロー画像のパスでありOGP画像も兼ねるので、原則は画像を用意すること
    ogImageAlt: z.string().max(120).optional(), // OGP画像のalt属性
    author: reference('authors').optional().or(z.literal('')), // 記事の著者(匿名にしたいときは、この項目を削除または'')
    publishDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .date(), // 記事の公開日(YYYY-MM-DDの形式)
    updatedDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .date()
      .optional()
      .or(z.literal('')), // 記事の更新日(YYYY-MM-DDの形式)
    categories: z.array(z.string()).optional(), // カテゴリーを設定してグループ化(1つだけ設定することを推奨、階層構造有)
    tags: z.array(z.string()).optional(), // タグを設定してキーワード化(階層構造無)
    isDraft: z.boolean(), // 本番用にビルドするときにのみ、isDraft: trueを含むエントリーを除外
  }),
})

const nameSchema = z.object({
  formal: z.string().min(1).max(20),
  ruby: z.string().min(1).max(20),
})

const authors = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.object({
      last: nameSchema, // 名字
      middle: z.object({
        formal: z.string().max(20).optional().or(z.literal('')),
        ruby: z.string().max(20).optional().or(z.literal('')),
      }), // 中間名
      first: nameSchema, // 名前
      nick: z.string().max(20).optional().or(z.literal('')), // あだ名
    }),
    introduction: z.string().max(150).optional().or(z.literal('')), // 自己紹介
    occupation: z.array(z.string().max(20)).optional(), // 職種
    location: z.string().max(20).optional().or(z.literal('')), // 勤務地
    position: z.string().max(20).optional().or(z.literal('')), // 職位
    department: z.string().max(20).optional().or(z.literal('')), // 部署
    email: z.string().email().optional().or(z.literal('')),
    image: z
      .string()
      .optional()
      .refine((value) => {
        if (!value) return true // 値が存在しない場合はバリデーション成功
        return /^\/.*\.(webp|jpg|jpeg|png|avif)$/.test(value) // '/'で始まり、画像の拡張子（.webp, .jpg, .jpeg, .png, .avif）で終了
      })
      .default('/'), // TODO: パスを決めること // 画像を表示するためのパス
    sns: z.object({
      xCreator: z.string().startsWith('@').optional().or(z.literal('')), // 記事の著者のXアカウント(@から始まる文字列)で、<meta name="twitter:creator" content="">に使用
      x: z.string().url().optional().or(z.literal('')),
      instagram: z.string().url().optional().or(z.literal('')),
      facebook: z.string().url().optional().or(z.literal('')),
      wantedly: z.string().url().optional().or(z.literal('')),
      linkedIn: z.string().url().optional().or(z.literal('')),
      gitHub: z.string().url().optional().or(z.literal('')),
      zenn: z.string().url().optional().or(z.literal('')),
      qiita: z.string().url().optional().or(z.literal('')),
    }),
  }),
})

export const collections = { blog, authors }
