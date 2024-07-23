// Reference: https://park-ui.com/docs/panda/components/segment-group

import * as _SegmentGroup from '@/components/ui/segment-group'

export const SegmentGroup = (props: _SegmentGroup.RootProps) => {
  const options = [
    { id: 'overview', label: 'Overview' },
    { id: 'customers', label: 'Customers' },
    { id: 'premium', label: 'Premium', disabled: true },
    { id: 'settings', label: 'Settings' },
  ]
  return (
    <_SegmentGroup.Root defaultValue='customers' {...props}>
      {options.map((option) => (
        <_SegmentGroup.Item key={option.id} value={option.id} disabled={option.disabled || false}>
          <_SegmentGroup.ItemControl />
          <_SegmentGroup.ItemText>{option.label}</_SegmentGroup.ItemText>
        </_SegmentGroup.Item>
      ))}
      <_SegmentGroup.Indicator />
    </_SegmentGroup.Root>
  )
}
