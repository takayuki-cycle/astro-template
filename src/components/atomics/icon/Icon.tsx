// Reference: https://park-ui.com/docs/panda/components/icon

import { type IconProps, Icon as _Icon } from '@/components/ui/icon'
import { DiamondIcon } from 'lucide-react'

export const Icon = (props: IconProps) => {
  return (
    <_Icon {...props}>
      <DiamondIcon />
    </_Icon>
  )
}
