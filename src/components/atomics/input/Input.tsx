// Reference: https://park-ui.com/docs/panda/components/input

import { FormLabel } from '@/components/ui/form-label'
import { type InputProps, Input as _Input } from '@/components/ui/input'
import { Stack } from 'styled-system/jsx'

export const Input = (props: InputProps) => {
  return (
    <Stack columnGap='1.5' rowGap='1.5' w='2xs'>
      <FormLabel htmlFor='name'>Name</FormLabel>
      <_Input id='name' placeholder='Your Name' {...props} />
    </Stack>
  )
}
