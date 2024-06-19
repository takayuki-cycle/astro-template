import * as _Tooltip from '@/components/ui/tooltip'

export const Tooltip = (props: _Tooltip.RootProps) => (
  <_Tooltip.Root {...props}>
    <_Tooltip.Trigger>Hover Me</_Tooltip.Trigger>
    <_Tooltip.Positioner>
      <_Tooltip.Arrow>
        <_Tooltip.ArrowTip />
      </_Tooltip.Arrow>
      <_Tooltip.Content>I am a Tooltip!</_Tooltip.Content>
    </_Tooltip.Positioner>
  </_Tooltip.Root>
)
