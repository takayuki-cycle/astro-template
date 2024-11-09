type ColorCategory =
  | 'current'
  | 'black'
  | 'white'
  | 'transparent'
  | 'rose'
  | 'pink'
  | 'fuchsia'
  | 'purple'
  | 'violet'
  | 'indigo'
  | 'blue'
  | 'sky'
  | 'cyan'
  | 'teal'
  | 'emerald'
  | 'green'
  | 'lime'
  | 'yellow'
  | 'amber'
  | 'orange'
  | 'red'
  | 'neutral'
  | 'stone'
  | 'zinc'
  | 'gray'
  | 'slate'

type ColorShades =
  | ''
  | '.50'
  | '.100'
  | '.200'
  | '.300'
  | '.400'
  | '.500'
  | '.600'
  | '.700'
  | '.800'
  | '.900'
  | '.950'

export type BorderStyle =
  | 'none'
  | 'hidden'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset'

export type ColorPath = `${ColorCategory}${ColorShades}`

export type ColorArray = [ColorPath, (ColorPath | '')?] // [base, _osDark]、値を追加するときはここへ追加

export type ColorValue = {
  //値を追加するときはここへ追加
  base: ColorPath
  _osDark: ColorPath | ''
}

export type GradientValue = [
  'linear' | 'radial', // type(baseと_osDarkで同じ値を使います。)
  string, // placement(baseと_osDarkで同じ値を使います。)
  ColorPath[], // stops -> color(base)(color(base)とcolor(_osDark)とpositionの要素数は同じにしてください。)
  ColorPath[]?, // stops -> color(_osDark)
  number[]?, // stops -> position(baseと_osDarkで同じ値を使います。単位はpxで、それぞれの数字の間隔にグラデーションがかかります。)
]

export type BorderValue = [
  number, // width(単位はremです。baseと_osDarkで同じ値を使います。)
  BorderStyle, // style(baseと_osDarkで同じ値を使います。)
  ColorArray, // color
]

export type ShadowArray = [
  number, // offsetX(単位はremです。baseと_osDarkで同じ値を使います。)
  number, // offsetY(単位はremです。baseと_osDarkで同じ値を使います。)
  number, // blur(単位はremです。baseと_osDarkで同じ値を使います。)
  number, // spread(単位はremです。baseと_osDarkで同じ値を使います。)
  ColorArray, // color
  'inset'?, // inset(とりうる値はinsetまたはundefined(outset)のみです。)
]

export type ShadowValue = ShadowArray | ShadowArray[]

export type Tokens<T> = {
  [key: string]: T | Tokens<T>
}

export type TokenResult<T> = {
  [key: string]: {
    value: T
  } & {
    [nestedKey: string]: TokenResult<T> | { value: T }
  }
}
