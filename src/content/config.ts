import { defineCollection, reference, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1).max(60), // 記事のタイトル
    description: z.string().min(1).max(160), // 記事の説明
    robots: z
      .enum([
        "", // <meta name='robots'>を削除します。(削除のときは、allを記載したことと同じ効果になります。)
        "all", // インデックスされ、リンクがたどられます。（デフォルトの動作のため、<meta name='robots'>は削除します。）(index, followと同じです。)
        "index", // ページを検索エンジンのインデックスに含めることを指示します。
        "noindex", // ページを検索エンジンのインデックスに含めないことを指示します。
        "follow", // ページ内のリンクをたどってインデックスすることを指示します。
        "nofollow", // ページ内のリンクをたどらないことを指示します。
        "none", // 'noindex'と'nofollow'の両方を指示します。
        "noarchive", // ページのキャッシュを保存しないことを指示します。
        "nosnippe", // 検索結果にスニペット（ページ内容の要約）を表示しないことを指示します。
        "index, nofollow",
        "noindex, follow",
      ])
      .optional()
      .default(""),
    ogImage: z
      .string()
      .optional()
      .refine((value) => {
        if (!value) return true; // 値が存在しない場合はバリデーション成功
        return /^\/.*\.(webp|jpg|jpeg|png|avif)$/.test(value); // '/'で始まり、画像の拡張子（.webp, .jpg, .jpeg, .png, .avif）で終了
      })
      .default("/ogp/general.webp"), // ヒーロー画像のパスでありOGP画像も兼ねるので、原則は画像を用意すること
    ogImageAlt: z.string().max(120).optional(), // OGP画像のalt属性
    xCreator: z.string().optional(), // 記事の執筆者のXアカウント(@から始まる文字列)
    author: reference("authors"), // 記事の執筆者
    publishDate: z.coerce.date(), // 記事の公開日
    updatedDate: z.coerce.date().optional(), // 記事の更新日
    tags: z.array(z.string()).optional(), // タグを付けてグループ化
    location: z.string().optional(), // 拠点でグループ化
    isDraft: z.boolean(), // 本番用にビルドするときにのみ、isDraft: trueを含むエントリーを除外
  }),
});

export const collections = { blog };

/* TODO: json(yaml)で型定義をするのであれば、参考にすること
     authorImage: z
      .string()
      .optional()
      .refine((value) => {
        if (!value) return true // 値が存在しない場合はバリデーション成功
        return /^\/.*\.(webp|jpg|jpeg|png|avif)$/.test(value)
      }),
    authorProfile: z.string().optional(), // 執筆者のプロフィール
    authorXURL: , // 執筆者のインスタグラム
    authorInstagramURL: , // 執筆者のインスタグラム
    authorFacebookURL: , // 執筆者のインスタグラム
*/
