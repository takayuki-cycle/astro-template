// Reference: https://park-ui.com/docs/panda/components/textarea

import { FormLabel } from '@/components/ui/form-label'
import { type TextareaProps, Textarea as _Textarea } from '@/components/ui/textarea'
import { Stack } from 'styled-system/jsx'

export const Textarea = (props: TextareaProps) => {
  return (
    <Stack gap='1.5' width='2xs'>
      <FormLabel htmlFor='description'>Description</FormLabel>
      <_Textarea id='description' rows={4} {...props} />
    </Stack>
  )
}
