// カラートークンを一括生成
type ColorValue = [string, string] // [base, _osDark]、値を追加するときはここへ追加

type ColorValueResult = {
  //値を追加するときはここへ追加
  base: string
  _osDark: string
}

export type ColorTokens = {
  [key: string]: ColorValue | ColorTokens
}

export type TokenResult = {
  [key: string]: {
    value: ColorValueResult
  } & {
    [nestedKey: string]: TokenResult | { value: ColorValueResult }
  }
}
