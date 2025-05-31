import { cva, type RecipeVariantProps } from '@/../styled-system/css'

export type Variants = RecipeVariantProps<typeof styleLetter> &
  RecipeVariantProps<typeof styleImage>

const size = (type: 'letter' | 'image') =>
  ({
    // width = 24px
    xs: {
      '& > summary': {
        w: '6',
        h: '6',
        ...(type === 'letter' && ({ fontSize: '2xs', py: '1', border: 'secondary' } as const))
      }
    },
    // width = 32px
    sm: {
      '& > summary': {
        w: '8',
        h: '8',
        ...(type === 'letter' && ({ fontSize: 'xs', py: '1', border: 'secondary' } as const))
      }
    },
    // width = 48px(初期値)
    md: {
      '& > summary': {
        w: '12',
        h: '12',
        ...(type === 'letter' && ({ fontSize: 'md', py: '2', border: 'secondary' } as const))
      }
    },
    // width = 64px
    lg: {
      '& > summary': {
        w: '16',
        h: '16',
        ...(type === 'letter' && ({ fontSize: '2xl', py: '2.5', border: 'secondary' } as const))
      }
    },
    // width = 96px
    xl: {
      '& > summary': {
        w: '24',
        h: '24',
        ...(type === 'letter' && ({ fontSize: '4xl', py: '4', border: 'secondary' } as const))
      }
    },
    // width = 128px
    '2xl': {
      '& > summary': {
        w: '32',
        h: '32',
        ...(type === 'letter' && ({ fontSize: '5xl', py: '6', border: 'secondary' } as const))
      }
    }
  }) as const

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
