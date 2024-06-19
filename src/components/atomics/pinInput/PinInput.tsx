// Reference: https://park-ui.com/docs/panda/components/pin-input

import { type PinInputProps, PinInput as _PinInput } from '@/components/ui/pin-input'

export const PinInput = (props: PinInputProps) => {
  return (
    <_PinInput placeholder='0' onValueComplete={(e) => alert(e.valueAsString)} {...props}>
      Pin Input
    </_PinInput>
  )
}
