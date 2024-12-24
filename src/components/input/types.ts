export interface InputProps {
  type?: 'text' | 'password'
  id?: string
  value: string
  onChange: (value: string) => void
  autoComplete?: AutoComplete
  placeholder?: string
  ariaRequired?: undefined | true
  error: string
}

type AutoComplete =
  | 'off'
  | 'name' // 氏名
  | 'family-name' // 名字
  | 'given-name' // 名前
  | 'nickname' // ペンネームやハンドルネーム
  | 'username' // ユーザー名 or アカウント名
  | 'organization' // 企業・団体・組織名
  | 'organization-title' // 職名や組織内の肩書き
  | 'country-name' // 国名
  | 'tel' // 電話番号
  | 'email' // メールアドレス
  | 'new-password' // 新しいパスワード
  | 'postal-code' // 郵便番号
  | 'address-level1' // 都道府県
  | 'address-level2' // 市区町村
  | 'address-level3' // 町域
  | 'address-level4' // 番地など
  | 'url' // URL
  | 'cc-name' // クレジットカード登録名
  | 'cc-number' // カード番号
  | 'cc-exp' // カードの有効期限
