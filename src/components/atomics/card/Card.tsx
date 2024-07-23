// Reference: https://park-ui.com/docs/panda/components/card

import { Button } from '@/components/ui/button'
import * as _Card from '@/components/ui/card'
import { FormLabel } from '@/components/ui/form-label'
import { Input } from '@/components/ui/input'
import { Stack } from 'styled-system/jsx'

export const Card = (props: _Card.RootProps) => {
  return (
    <_Card.Root width='sm' {...props}>
      <_Card.Header>
        <_Card.Title>Team Members</_Card.Title>
        <_Card.Description>Add new members to your organisation.</_Card.Description>
      </_Card.Header>
      <_Card.Body>
        <Stack columnGap='4' rowGap='4'>
          <Stack columnGap='1.5' rowGap='1.5'>
            <FormLabel htmlFor='name'>Name</FormLabel>
            <Input id='name' placeholder='Name' />
          </Stack>
          <Stack columnGap='1.5' rowGap='1.5'>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input id='email' type='email' placeholder='Email' />
          </Stack>
        </Stack>
      </_Card.Body>
      <_Card.Footer gap='3'>
        <Button variant='outline'>Cancel</Button>
        <Button>Invite</Button>
      </_Card.Footer>
    </_Card.Root>
  )
}
