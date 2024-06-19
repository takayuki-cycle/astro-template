// Reference: https://park-ui.com/docs/panda/components/collapsible

import { Button } from '@/components/ui/button'
import * as _Collapsible from '@/components/ui/collapsible'
import { Box } from 'styled-system/jsx'

export const Collapsible = (props: _Collapsible.RootProps) => {
  return (
    <_Collapsible.Root defaultOpen {...props}>
      <_Collapsible.Trigger asChild>
        <Button variant='outline'>Toggle</Button>
      </_Collapsible.Trigger>
      <_Collapsible.Content>
        <Box bg='accent.default' color='accent.fg' p='4' borderRadius='l3' mt='3'>
          Content
        </Box>
      </_Collapsible.Content>
    </_Collapsible.Root>
  )
}
