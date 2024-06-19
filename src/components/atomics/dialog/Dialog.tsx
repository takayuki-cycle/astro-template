// Reference: https://park-ui.com/docs/panda/components/dialog

import { Button } from '@/components/ui/button'
import * as _Dialog from '@/components/ui/dialog'
import { IconButton } from '@/components/ui/icon-button'
import { XIcon } from 'lucide-react'
import { Stack } from 'styled-system/jsx'

export const Dialog = (props: _Dialog.RootProps) => {
  return (
    <_Dialog.Root {...props}>
      <_Dialog.Trigger asChild>
        <Button>Open Dialog</Button>
      </_Dialog.Trigger>
      <_Dialog.Backdrop />
      <_Dialog.Positioner>
        <_Dialog.Content>
          <Stack gap='8' p='6'>
            <Stack gap='1'>
              <_Dialog.Title>Dialog Title</_Dialog.Title>
              <_Dialog.Description>Dialog Description</_Dialog.Description>
            </Stack>
            <Stack gap='3' direction='row' width='full'>
              <_Dialog.CloseTrigger asChild>
                <Button variant='outline' width='full'>
                  Cancel
                </Button>
              </_Dialog.CloseTrigger>
              <Button width='full'>Confirm</Button>
            </Stack>
          </Stack>
          <_Dialog.CloseTrigger asChild position='absolute' top='2' right='2'>
            <IconButton aria-label='Close Dialog' variant='ghost' size='sm'>
              <XIcon />
            </IconButton>
          </_Dialog.CloseTrigger>
        </_Dialog.Content>
      </_Dialog.Positioner>
    </_Dialog.Root>
  )
}
