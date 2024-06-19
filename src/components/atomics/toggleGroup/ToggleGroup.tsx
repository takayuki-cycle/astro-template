// Reference: https://park-ui.com/docs/panda/components/toggle-group

import * as _ToggleGroup from '@/components/ui/toggle-group'
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
} from 'lucide-react'
import { Stack } from 'styled-system/jsx'

export const ToggleGroup = (props: _ToggleGroup.RootProps) => {
  return (
    <Stack
      direction={props.orientation === 'horizontal' ? 'row' : 'column'}
      gap='3'
      borderRadius='l3'
      borderWidth={props.variant === 'ghost' ? '1px' : '0'}
      p={props.variant === 'ghost' ? '1' : '0'}
    >
      <_ToggleGroup.Root multiple {...props}>
        <_ToggleGroup.Item value='bold' aria-label='Toggle Bold'>
          <BoldIcon />
        </_ToggleGroup.Item>
        <_ToggleGroup.Item value='italic' aria-label='Toggle Italic'>
          <ItalicIcon />
        </_ToggleGroup.Item>
        <_ToggleGroup.Item value='underline' aria-label='Toggle Underline'>
          <UnderlineIcon />
        </_ToggleGroup.Item>
      </_ToggleGroup.Root>
      <_ToggleGroup.Root defaultValue={['left']} {...props}>
        <_ToggleGroup.Item value='left' aria-label='Align Left'>
          <AlignLeftIcon />
        </_ToggleGroup.Item>
        <_ToggleGroup.Item value='center' aria-label='Align Center'>
          <AlignCenterIcon />
        </_ToggleGroup.Item>
        <_ToggleGroup.Item value='right' aria-label='Align Right'>
          <AlignRightIcon />
        </_ToggleGroup.Item>
        <_ToggleGroup.Item value='justify' aria-label='Align Justify'>
          <AlignJustifyIcon />
        </_ToggleGroup.Item>
      </_ToggleGroup.Root>
    </Stack>
  )
}
