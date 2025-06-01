import { cva, type RecipeVariantProps } from '@/../styled-system/css'
import type { SizeStyleMap } from '@/components/avatar/types.ts'

export type Variants = RecipeVariantProps<typeof styleLetter> &
  RecipeVariantProps<typeof styleImage>

const SIZE_STYLE_MAP: SizeStyleMap = {
  // size * 4 = px, 例: xs = 24px
  xs: { size: '6', fontSize: '2xs', py: '1' },
  sm: { size: '8', fontSize: 'xs', py: '1' },
  md: { size: '12', fontSize: 'md', py: '2' },
  lg: { size: '16', fontSize: '2xl', py: '2.5' },
  xl: { size: '24', fontSize: '4xl', py: '4' },
  '2xl': { size: '32', fontSize: '5xl', py: '6' }
} as const

const size = (type: 'letter' | 'image') =>
  Object.fromEntries(
    Object.entries(SIZE_STYLE_MAP).map(([key, value]) => [
      key,
      {
        '& > summary': {
          w: value.size,
          h: value.size,
          ...(type === 'letter' &&
            ({
              fontSize: value.fontSize,
              py: value.py,
              border: 'secondary'
            } as const))
        }
      }
    ])
  )

const pointerEvents = {
  auto: {
    // TODO: ::details-contentではListタグにおけるSafariとFirefoxの開閉のアニメーションが効かないので、対処方法を考えること(JSでアニメーションした方が良いかも?)
  },
  none: {
    pointerEvents: 'none' as const
  }
}

export const styleLetter = cva({
  base: {
    display: 'inline-block',
    pos: 'relative',
    '& > summary': {
      textAlign: 'center'
    },
    '& > ul': {
      pos: 'absolute',
      zIndex: 'dropdown'
    }
  },
  variants: {
    shape: {
      rounded: {
        '& > summary': {
          rounded: 'full'
        }
      },
      square: { '& > summary': { rounded: 'none' } }
    },
    color: {
      primary: {
        '& > summary': {
          color: 'text.reverse',
          bgColor: 'primary',
          transitionProperty: 'color, background-color',
          transitionDuration: 'normal',
          transitionTimingFunction: 'ease',
          _hover: {
            '@media (any-hover: hover)': { color: 'text.reverse.hover', bgColor: 'primary.hover' }
          },
          _focusVisible: { color: 'text.reverse.hover', bgColor: 'primary.hover' },
          _active: { '&:active': { color: 'text.reverse.active', bgColor: 'primary.active' } }
        }
      }
    },
    size: size('letter'),
    pointerEvents: pointerEvents
  },
  defaultVariants: {
    shape: 'rounded',
    color: 'primary',
    size: 'md',
    pointerEvents: 'auto'
  }
})

export const styleImage = cva({
  base: {
    display: 'inline-block',
    pos: 'relative',
    '& > summary': {
      overflow: 'hidden'
    },
    '& > ul': {
      pos: 'absolute',
      zIndex: 'dropdown'
    },
    '& > summary > img': {
      aspectRatio: 'square',
      objectFit: 'cover',
      transitionProperty: 'transform',
      transitionDuration: 'normal',
      transitionTimingFunction: 'ease',
      _hover: {
        '@media (any-hover: hover)': { transform: 'scale(1.1,1.1)' }
      },
      _focusVisible: { transform: 'scale(1.1,1.1)' },
      _active: { '&:active': { transform: 'scale(1.2,1.2)' } }
    }
  },
  variants: {
    shape: {
      rounded: {
        '& > summary': {
          rounded: 'full'
        },
        '& > summary > img': {
          rounded: 'full'
        }
      },
      square: {
        '& > summary': {
          rounded: 'none'
        },
        '& > summary > img': {
          rounded: 'none'
        }
      }
    },
    size: size('image'),
    pointerEvents: pointerEvents
  },
  defaultVariants: {
    shape: 'rounded',
    size: 'md',
    pointerEvents: 'auto'
  }
})
