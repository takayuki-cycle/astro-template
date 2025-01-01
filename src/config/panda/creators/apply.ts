// 注意: このファイルでは、eslint-plugin-pandaが非対応
import type { SystemStyleObject } from 'styled-system/types'

// 非表示だがスクリーンリーダーからは認識
export const visibilityHidden: SystemStyleObject = {
  pos: 'absolute',
  w: '0.25',
  h: '0.25',
  // eslint-disable-next-line @pandacss/no-margin-properties
  m: '-0.25',
  p: '0',
  border: '0',
  overflow: 'hidden',
  // eslint-disable-next-line no-restricted-syntax
  clip: 'rect(0, 0, 0, 0)'
}
