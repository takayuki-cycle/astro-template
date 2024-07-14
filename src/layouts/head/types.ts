export interface HeadProps {
  title: string
  description: string
  robots: Robots
  canonical: `${'http' | 'https'}://${string}/` // og:urlも兼用
  ogType: OgType
  ogImage: string
  ogImageAlt: string
  xCreator?: `@${string}` | '' // 記事の作成者のXアカウント
  author?: string // 著者もしくは会社名
  googleSiteVerification?: string // トップレベルのページだけに設定
}

type RobotDirective =
  | '' // <meta name='robots'>を削除します。(削除のときは、allを記載したことと同じ効果になります。)
  | 'all' // インデックスされ、リンクがたどられます。（デフォルトの動作のため、<meta name='robots'>は削除します。）(index, followと同じです。)
  | 'index' // ページを検索エンジンのインデックスに含めることを指示します。
  | 'noindex' // ページを検索エンジンのインデックスに含めないことを指示します。
  | 'follow' // ページ内のリンクをたどってインデックスすることを指示します。
  | 'nofollow' // ページ内のリンクをたどらないことを指示します。
  | 'none' // `noindex`と`nofollow`の両方を指示します。
  | 'noarchive' // ページのキャッシュを保存しないことを指示します。
  | 'nosnippet' // 検索結果にスニペット（ページ内容の要約）を表示しないことを指示します。
  | 'notranslate' // ページを自動翻訳の対象から外すことを指示します。
  | 'noimageindex' // ページ内の画像をインデックスに含めないことを指示します。
  | `max-snippet:${number}` // スニペットの長さを指定された文字数に制限します。
  | `max-image-preview:none` // 画像プレビューのサイズを制限します。
  | `max-image-preview:standard` // 画像プレビューのサイズを制限します。
  | `max-image-preview:large` // 画像プレビューのサイズを制限します。
  | `max-video-preview:${number}` // ビデオプレビューの長さを指定された秒数に制限します。
  | `unavailable_after:${string}` // 指定した日付以降、ページをインデックスしないようにします。

type Robots =
  | RobotDirective
  | `${RobotDirective}, ${RobotDirective}`
  | `${RobotDirective}, ${RobotDirective}, ${RobotDirective}`

type OgType =
  | 'website' // 一般的なウェブサイト
  | 'article' // 記事やブログ
  | 'profile' // 個人のプロフィール
  | 'music' // 音楽
  | 'video' // ビデオ
  | 'book' // 書籍
