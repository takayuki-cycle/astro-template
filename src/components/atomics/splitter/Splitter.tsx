// Reference: https://park-ui.com/docs/panda/components/splitter

import * as _Splitter from '@/components/ui/splitter'

export const Splitter = (props: _Splitter.RootProps) => {
  return (
    <_Splitter.Root
      size={[
        { id: 'a', size: 50 },
        { id: 'b', size: 50 },
      ]}
      {...props}
    >
      <_Splitter.Panel id='a'>A</_Splitter.Panel>
      <_Splitter.ResizeTrigger id='a:b' />
      <_Splitter.Panel id='b'>B</_Splitter.Panel>
    </_Splitter.Root>
  )
}
