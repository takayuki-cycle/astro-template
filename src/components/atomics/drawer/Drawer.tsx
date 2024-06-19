// Reference: https://park-ui.com/docs/panda/components/drawer

import { Button } from '@/components/ui/button'
import * as _Drawer from '@/components/ui/drawer'
import { IconButton } from '@/components/ui/icon-button'
import { XIcon } from 'lucide-react'

export const Drawer = (props: _Drawer.RootProps) => {
  return (
    <_Drawer.Root {...props}>
      <_Drawer.Trigger asChild>
        <Button>Open Drawer</Button>
      </_Drawer.Trigger>
      <_Drawer.Backdrop />
      <_Drawer.Positioner>
        <_Drawer.Content>
          <_Drawer.Header>
            <_Drawer.Title>Title</_Drawer.Title>
            <_Drawer.Description>Description</_Drawer.Description>
            <_Drawer.CloseTrigger asChild position='absolute' top='3' right='4'>
              <IconButton variant='ghost'>
                <XIcon />
              </IconButton>
            </_Drawer.CloseTrigger>
          </_Drawer.Header>
          <_Drawer.Body>{/* Content */}</_Drawer.Body>
          <_Drawer.Footer gap='3'>
            <_Drawer.CloseTrigger asChild>
              <Button variant='outline'>Cancel</Button>
            </_Drawer.CloseTrigger>
            <Button>Primary</Button>
          </_Drawer.Footer>
        </_Drawer.Content>
      </_Drawer.Positioner>
    </_Drawer.Root>
  )
}
