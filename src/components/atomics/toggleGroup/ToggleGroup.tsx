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
      // direction={props.orientation === 'horizontal' ? 'row' : 'column'}
      direction='row'
      columnGap='3'
      rowGap='3'
      roundedTopLeft='l3'
      roundedTopRight='l3'
      roundedBottomRight='l3'
      roundedBottomLeft='l3'
      // borderTopWidth={props.variant === 'ghost' ? '1px' : '0'}
      // borderRightWidth={props.variant === 'ghost' ? '1px' : '0'}
      // borderBottomWidth={props.variant === 'ghost' ? '1px' : '0'}
      // borderLeftWidth={props.variant === 'ghost' ? '1px' : '0'}
      borderTopWidth='1px'
      borderRightWidth='1px'
      borderBottomWidth='1px'
      borderLeftWidth='1px'
      // pt={props.variant === 'ghost' ? '1' : '0'}
      // pr={props.variant === 'ghost' ? '1' : '0'}
      // pb={props.variant === 'ghost' ? '1' : '0'}
      // pl={props.variant === 'ghost' ? '1' : '0'}
      pt='1'
      pr='1'
      pb='1'
      pl='1'
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
