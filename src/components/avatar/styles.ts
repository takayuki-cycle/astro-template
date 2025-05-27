import { cva, type RecipeVariantProps } from '@/../styled-system/css'
import { SIZE_MAP } from '@/components/avatar/utils.ts'

export type Variants = RecipeVariantProps<typeof styleLetter> &
  RecipeVariantProps<typeof styleImage>

const size = (type: 'letter' | 'image') => {
  return {
    // width = 24px
    xs: {
      '& > summary': {
        w: `${SIZE_MAP.xs}`,
        h: `${SIZE_MAP.xs}`,
        ...(type === 'letter' && ({ fontSize: '2xs', py: '1', border: 'secondary' } as const))
      }
    },
    // width = 32px
    sm: {
      '& > summary': {
        w: `${SIZE_MAP.sm}`,
        h: `${SIZE_MAP.sm}`,
        ...(type === 'letter' && ({ fontSize: 'xs', py: '1', border: 'secondary' } as const))
      }
    },
    // width = 48px(初期値)
    md: {
      '& > summary': {
        w: `${SIZE_MAP.md}`,
        h: `${SIZE_MAP.md}`,
        ...(type === 'letter' && ({ fontSize: 'md', py: '2', border: 'secondary' } as const))
      }
    },
    // width = 64px
    lg: {
      '& > summary': {
        w: `${SIZE_MAP.lg}`,
        h: `${SIZE_MAP.lg}`,
        ...(type === 'letter' && ({ fontSize: '2xl', py: '2.5', border: 'secondary' } as const))
      }
    },
    // width = 96px
    xl: {
      '& > summary': {
        w: `${SIZE_MAP.xl}`,
        h: `${SIZE_MAP.xl}`,
        ...(type === 'letter' && ({ fontSize: '4xl', py: '4', border: 'secondary' } as const))
      }
    },
    // width = 128px
    '2xl': {
      '& > summary': {
        w: `${SIZE_MAP['2xl']}`,
        h: `${SIZE_MAP['2xl']}`,
        ...(type === 'letter' && ({ fontSize: '5xl', py: '6', border: 'secondary' } as const))
      }
    }
  } as const
}

const pointerEvents = {
  auto: {},
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
