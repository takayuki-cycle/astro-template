export const globalStyles = {
  // 視差効果を減らす設定がされている場合はアニメーションを行わないようにします。
  '@media (prefers-reduced-motion: reduce)': {
    '*, ::before, ::after, ::backdrop': {
      backgroundAttachment: 'scroll!',
      transitionDelay: '0s!',
      // eslint-disable-next-line no-restricted-syntax
      transitionDuration: '1ms!',
      animationDuration: '1ms!',
      animationDelay: '0s!',
      animationIterationCount: '1!',
      scrollBehavior: 'auto!'
    }
  },
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
  ':where(h1)': {
    fontSize: 'h1'
  },
  ':where(h2)': {
    fontSize: 'h2'
  },
  ':where(h3)': {
    fontSize: 'h3'
  },
  ':where(h4)': {
    fontSize: 'h4'
  },
  ':where(h5)': {
    fontSize: 'h5'
  },
  ':where(h6)': {
    fontSize: 'h6'
  },
  strong: {
    fontWeight: 'normal'
  },
  textarea: { resize: 'none' },
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
    ring: 'none'
  },
  // テキストと下線が重なると読みにくいため、位置の調整を微調整
  ':where(:any-link)': {
    textUnderlineOffset: '4'
  },
  // 固定ヘッダーの高さを取得して、ページ内リンクで遷移するときにその高さを加えてスクロールすることでコンテンツと重なる問題を解消(取得方法はHead.astroを参照)
  '[id], :focus': {
    scrollMarginBlockStart: 'var(--header-block-size)'
  }
}
