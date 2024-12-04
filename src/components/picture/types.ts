export interface Props {
  src: (
    | ImageMetadata
    | string
    | Promise<{
        default: ImageMetadata
      }>
  )[]
  width: (number | `${number}`)[]
  height: (number | `${number}`)[]
  media: string[]
  alt: string
  isOptimization: true // 元の画像を上書きして最適化するため、意図しない変更を防ぐためにtrueと指定したときに最適化を実行
}
