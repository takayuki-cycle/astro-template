export const globalStyles = {
  html: {
    '--global-font-body': 'Noto Sans JP',
    '--global-font-mono': 'Noto Sans Mono',
    fontOpticalSizing: 'auto'
  },
  body: {
    // 左右スワイプによる履歴ナビゲーションを無効化
    overscrollBehaviorX: 'none'
  },
  strong: {
    fontWeight: 'normal'
  },
  textarea: { resize: 'none' },
  summary: {},
  // iOSでbuttonと特定のinputを連続でタップしても、画面が拡大されないようにします。
  ':where(button, [type="button"], [type="reset"], [type="submit"])': {
    touchAction: 'manipulation'
  },
  ':where(:any-link, button, [type="button"], [type="reset"], [type="submit"], label[for], select, summary, [role="tab"], [role="button"])':
    {
      cursor: 'pointer'
    }
}
