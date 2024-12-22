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
  ':where(body)': {
    color: 'text'
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
  // クリックしたら何かが行われる要素に対して、カーソルをポインターアイコンへ変更
  ':where(:any-link, button, [type="button"], [type="reset"], [type="submit"], label[for], select, summary, [role="tab"], [role="button"])':
    {
      cursor: 'pointer'
    },
  // キーボードで操作したときのフォーカスリングを維持しつつ、クリックやタップしたときのフォーカスリングを抑制
  ':focus:not(:focus-visible)': {
    outline: 'none'
  },
  // テキストと下線が重なると読みにくいため、位置の調整を微調整
  ':where(:any-link)': {
    textUnderlineOffset: '4'
  }
}
