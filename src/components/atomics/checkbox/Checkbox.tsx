// Reference: https://park-ui.com/docs/panda/components/checkbox

import { type CheckboxProps, Checkbox as _Checkbox } from '@/components/ui/checkbox'

export const Checkbox = (props: CheckboxProps) => {
  return (
    <_Checkbox defaultChecked {...props}>
      Label
    </_Checkbox>
  )
}
