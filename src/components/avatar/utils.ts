import type { Size } from '@/components/avatar/types.ts'

// Chakra UIのsizeを参考
export const SIZE_MAP = {
  '2xs': 4, // 16px
  xs: 6, // 24px
  sm: 8, // 32px
  md: 12, // 48px(初期値)
  lg: 16, // 64px
  xl: 24, // 96px
  '2xl': 32 // 128px
} as const

export const extractInitialCharacters = (alt: string): string => {
  if (alt.length === 0) return ''
  if (alt.length === 1) return alt

  const isFirstSpace = /^[\s　]/.test(alt) // 1文字目が半角または全角スペース
  const spaceRegex = /[\s　]/g // 半角スペースまたは全角スペース
  const matches = alt.match(spaceRegex) ?? '' // 例: 'あ い' => [' '], 'あ い う' => ['　', ' '], 'あいう' => ''

  if (isFirstSpace) throw new Error('1文字目に半角または全角スペースは使わないでください。')
  if (matches.length > 1) {
    throw new Error(
      'avatarコンポーネントに収める文字数の関係で、半角または全角スペースは1つ以下にしてください。'
    )
  }
  // 半角または全角スペースがちょうど1
  if (matches) {
    const [first = '', second = ''] = alt.split(spaceRegex)
    return `${first[0]}${second[0]}`
  }

  return alt.slice(0, 2) // 半角スペースまたは全角スペースが0
}

export const validateAvatarProps = (
  sxSize: Size | undefined,
  sxPointerEvents: 'none' | 'auto' | undefined
) => {
  if (sxSize) {
    throw new Error(
      `条件分岐によって自動的に決まるため、sx={{ size: '2xl' }}のような指定は不要です。size='2xl'のように指定してください。`
    )
  }
  if (sxPointerEvents) {
    throw new Error(
      `条件分岐によって自動的に決まるため、sx={{ pointerEvents: 'none' }}のような指定は不要です。`
    )
  }
}
