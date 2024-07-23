// Reference: https://park-ui.com/docs/panda/components/alert

import * as _Alert from '@/components/ui/alert'
import { InfoIcon } from 'lucide-react'

export const Alert = (props: _Alert.RootProps) => {
  return (
    <_Alert.Root {...props}>
      <_Alert.Icon asChild>
        <InfoIcon />
      </_Alert.Icon>
      <_Alert.Content>
        <_Alert.Title>Browser Update available</_Alert.Title>
        <_Alert.Description>
          For the best experience, please update your browser.
        </_Alert.Description>
      </_Alert.Content>
    </_Alert.Root>
  )
}
