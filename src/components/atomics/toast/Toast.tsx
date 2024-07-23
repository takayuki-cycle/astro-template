// Reference: https://park-ui.com/docs/panda/components/toast

import { Button } from '@/components/ui/button'
import { IconButton } from '@/components/ui/icon-button'
import * as _Toast from '@/components/ui/toast'
import { XIcon } from 'lucide-react'

const toaster = _Toast.createToaster({
  placement: 'bottom-end',
  overlap: true,
  gap: 16,
})

export const Toast = () => (
  <>
    <Button
      variant='outline'
      onClick={() =>
        toaster.create({
          title: 'Toast Title',
          description: 'Toast Description',
          type: 'info',
        })
      }
    >
      Add Toast
    </Button>
    <_Toast.Toaster toaster={toaster}>
      {(toast) => (
        <_Toast.Root key={toast.id}>
          <_Toast.Title>{toast.title}</_Toast.Title>
          <_Toast.Description>{toast.description}</_Toast.Description>
          <_Toast.ActionTrigger asChild>
            <Button variant='link' size='sm'>
              Action
            </Button>
          </_Toast.ActionTrigger>
          <_Toast.CloseTrigger asChild>
            <IconButton size='sm' variant='link'>
              <XIcon />
            </IconButton>
          </_Toast.CloseTrigger>
        </_Toast.Root>
      )}
    </_Toast.Toaster>
  </>
)
