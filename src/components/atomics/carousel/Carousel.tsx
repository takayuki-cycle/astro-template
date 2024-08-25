// Reference: https://park-ui.com/docs/panda/components/carousel

/*
import * as _Carousel from '@/components/ui/carousel'
import { IconButton } from '@/components/ui/icon-button'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

export const Carousel = (props: _Carousel.RootProps) => {
  const images = [
    'https://tinyurl.com/5b6ka8jd',
    'https://tinyurl.com/7rmccdn5',
    'https://tinyurl.com/59jxz9uu',
    'https://tinyurl.com/6jurv23t',
    'https://tinyurl.com/yp4rfum7',
  ]
  return (
    <_Carousel.Root {...props}>
      <_Carousel.Viewport>
        <_Carousel.ItemGroup>
          {images.map((image, index) => (
            <_Carousel.Item key={index} index={index}>
              <img
                src={image}
                alt={`Slide ${index}`}
                style={{ height: '398px', width: '100%', objectFit: 'cover' }}
                width='100' // 仮の値
                height='100' // 仮の値
              />
            </_Carousel.Item>
          ))}
        </_Carousel.ItemGroup>
        <_Carousel.Control>
          <_Carousel.PrevTrigger asChild>
            <IconButton size='sm' variant='link' aria-label='Previous Slide'>
              <ChevronLeftIcon />
            </IconButton>
          </_Carousel.PrevTrigger>
          <_Carousel.IndicatorGroup>
            {images.map((_, index) => (
              <_Carousel.Indicator
                key={index}
                index={index}
                aria-label={`Goto slide ${index + 1}`}
              />
            ))}
          </_Carousel.IndicatorGroup>
          <_Carousel.NextTrigger asChild>
            <IconButton size='sm' variant='link' aria-label='Next Slide'>
              <ChevronRightIcon />
            </IconButton>
          </_Carousel.NextTrigger>
        </_Carousel.Control>
      </_Carousel.Viewport>
    </_Carousel.Root>
  )
}
*/
