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
  isOptimization: boolean
}
