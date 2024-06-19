// Reference: https://park-ui.com/docs/panda/components/tags-input

import { Button } from '@/components/ui/button'
import { IconButton } from '@/components/ui/icon-button'
import * as _TagsInput from '@/components/ui/tags-input'
import { XIcon } from 'lucide-react'

export const TagsInput = (props: _TagsInput.RootProps) => {
  return (
    <_TagsInput.Root defaultValue={['React', 'Solid', 'Vue']} maxW='xs' {...props}>
      <_TagsInput.Context>
        {(api) => (
          <>
            <_TagsInput.Label>Frameworks</_TagsInput.Label>
            <_TagsInput.Control>
              {api.value.map((value, index) => (
                <_TagsInput.Item key={index} index={index} value={value}>
                  <_TagsInput.ItemPreview>
                    <_TagsInput.ItemText>{value}</_TagsInput.ItemText>
                    <_TagsInput.ItemDeleteTrigger asChild>
                      <IconButton variant='link' size='xs'>
                        <XIcon />
                      </IconButton>
                    </_TagsInput.ItemDeleteTrigger>
                  </_TagsInput.ItemPreview>
                  <_TagsInput.ItemInput />
                </_TagsInput.Item>
              ))}
              <_TagsInput.Input placeholder='Add Framework' />
            </_TagsInput.Control>
            <_TagsInput.ClearTrigger asChild>
              <Button variant='outline'>Clear</Button>
            </_TagsInput.ClearTrigger>
          </>
        )}
      </_TagsInput.Context>
    </_TagsInput.Root>
  )
}
