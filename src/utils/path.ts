// URLパスの末尾のセグメントを取得(入力例: /path/to/segment/ => 出力: segment)
export const getLastSegment = (path: string) => path.split('/').filter(Boolean).pop() || ''
