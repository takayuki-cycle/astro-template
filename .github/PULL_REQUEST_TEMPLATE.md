<!-- PRを作成する際のテンプレートです。各項目に例を記載しておりますので、状況に合わせて変更してください。 -->

<!-- PRのタイトル -->
<!-- feat/ページネーションのコンポーネントを実装 -->

# 📝 概要

表示する記事が多すぎるとWebページの読み込み速度が低下するため、ページネーションを実装して小分けを可能にすることで読み込み速度を改善する。

## 🔧 実装内容

- `Pagination.astro`を実装
  - `props`
    - `sx`(型: `Variants`)
      - `color`(`primary`, `secondary`, `tertiary`)
      - `variant`(`solid`, `outline`)
      - `shape`(`circular`, `rounded`)
    - `pathName`(型: `string`): 記事の種類(ブログ、ニュースなど)を識別するため
    - `currentPage`(型: `number`): 現在が何ページ目なのかと、URLにも記載して一意に決定するため
    - `lastPage`(型: `number`): 記事の総数
    - `step`(型: `0 | 1 | 2 | 3 | 4 | 5 | 6`): `currentPage`の前後で遷移できるページを表示
- `styles.ts`を実装
  - `defaultVariants: {color: 'primary', variant: 'solid', shape: 'circular'}`
- `types.ts`で以下の型を実装
  - `Props`
  - `Step`
  - `PaginationOptions`
  - `PaginationResult`
  - `PaginationResultUnder`
- `utils.ts`を実装
  - `calculatePaginationBase`: 基本のページネーション計算
  - `calculatePagination`: 標準のページネーション
  - `calculatePaginationUnder`: 簡易ページネーション

## 🧪 動作の確認方法

- `lastPage = 12`, `step = 2`
  - `currentPage = 1`
    - `1 2 3 ... 12 >`がただしく表示されることを確認
  - `currentPage = 2`
    - `< 1 2 3 4 ... 12 >`がただしく表示されることを確認
  - `currentPage = 5`
    - `< 1 2 3 4 5 6 7 ... 12 >`がただしく表示されることを確認
  - `currentPage = 6`
    - `< 1 ... 4 5 6 7 8 ... 12 >`がただしく表示されることを確認
  - `currentPage = 8`
    - `< 1 ... 6 7 8 9 10 11 12 >`がただしく表示されることを確認
  - `currentPage = 12`
    - `< 1 ... 10 11 12`がただしく表示されることを確認

## 📸 スクリーンショットまたは動画

<!-- 簡素版
| 画面幅 | 改修前(任意) | 改修後 |
| :----: | :----------: | :----: |
| 1024px |              |        |
| 768px  |              |        |
| 767px  |              |        |
| 350px  |              |        |
-->

| `currentPage` | 改修前(任意) |                                                                    改修後                                                                     |
| :-----------: | :----------: | :-------------------------------------------------------------------------------------------------------------------------------------------: |
|       1       |     なし     |  ![currentPage1](https://raw.githubusercontent.com/takayuki-cycle/astro-template/refs/heads/main/src/assets/images/prTemp/currentPage1.webp)  |
|       2       |     なし     |  ![currentPage2](https://raw.githubusercontent.com/takayuki-cycle/astro-template/refs/heads/main/src/assets/images/prTemp/currentPage2.webp)  |
|       5       |     なし     |  ![currentPage5](https://raw.githubusercontent.com/takayuki-cycle/astro-template/refs/heads/main/src/assets/images/prTemp/currentPage5.webp)  |
|       6       |     なし     |  ![currentPage6](https://raw.githubusercontent.com/takayuki-cycle/astro-template/refs/heads/main/src/assets/images/prTemp/currentPage6.webp)  |
|       8       |     なし     |  ![currentPage8](https://raw.githubusercontent.com/takayuki-cycle/astro-template/refs/heads/main/src/assets/images/prTemp/currentPage8.webp)  |
|      12       |     なし     | ![currentPage12](https://raw.githubusercontent.com/takayuki-cycle/astro-template/refs/heads/main/src/assets/images/prTemp/currentPage12.webp) |

## ✅ チェックリスト

- [ ] コミットするときにフォーマッターとリンターをすべてパスしている(部分的にスキップされていてもOK)

## 🗒 補足

- こちらのレスポンシブ対応のためにWebサイトの画面の最小幅を350pxへ設定したので、改善できればレスポンシブできる画面幅を320pxへ設定して、その画面幅でも1行で収まるようにしたい

## 🔗 関連資料

- Backlog(チケット): <https://backlog.com/ja/>
- Notion(タスク): <https://www.notion.com/ja/>
- Figma(デザインカンプ): <https://www.figma.com/ja-jp/>
