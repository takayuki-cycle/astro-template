// Reference: https://park-ui.com/docs/panda/components/skeleton

import { Skeleton as _Skeleton } from '@/components/ui/skeleton'
import { Circle, HStack, Stack } from 'styled-system/jsx'

export const Skeleton = () => {
  return (
    <HStack w='full' columnGap='4' rowGap='4'>
      <_Skeleton borderRadius='full'>
        <Circle size='20' />
      </_Skeleton>
      <Stack columnGap='3.5' rowGap='3.5' w='full'>
        <_Skeleton h='4' />
        <_Skeleton h='4' width='80%' />
        <_Skeleton h='4' width='60%' />
      </Stack>
    </HStack>
  )
}
