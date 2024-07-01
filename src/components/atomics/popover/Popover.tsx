// Reference: https://park-ui.com/docs/panda/components/popover

import { Button } from '@/components/ui/button'
import { IconButton } from '@/components/ui/icon-button'
import * as _Popover from '@/components/ui/popover'
import { XIcon } from 'lucide-react'
import { Box, Stack } from 'styled-system/jsx'

export const Popover = (props: _Popover.RootProps) => {
  return (
    <_Popover.Root {...props}>
      <_Popover.Trigger asChild>
        <Button>Open Popover</Button>
      </_Popover.Trigger>
      <_Popover.Positioner>
        <_Popover.Content>
          <_Popover.Arrow>
            <_Popover.ArrowTip />
          </_Popover.Arrow>
          <Stack columnGap='1' rowGap='1'>
            <_Popover.Title>Favorite Framework</_Popover.Title>
            <_Popover.Description>
              Tell us what is your favorite framework and why you love to use it.
            </_Popover.Description>
          </Stack>
          <Box pos='absolute' top='1' right='1'>
            <_Popover.CloseTrigger asChild>
              <IconButton aria-label='Close Popover' variant='ghost' size='sm'>
                <XIcon />
              </IconButton>
            </_Popover.CloseTrigger>
          </Box>
        </_Popover.Content>
      </_Popover.Positioner>
    </_Popover.Root>
  )
}
