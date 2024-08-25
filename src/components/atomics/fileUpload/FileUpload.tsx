// Reference: https://park-ui.com/docs/panda/components/file-upload

/*
import { Button } from '@/components/ui/button'
import * as _FileUpload from '@/components/ui/file-upload'
import { IconButton } from '@/components/ui/icon-button'
import { Trash2Icon } from 'lucide-react'

export const FileUpload = (props: _FileUpload.RootProps) => {
  return (
    <_FileUpload.Root maxFiles={3} {...props}>
      <_FileUpload.Dropzone>
        <_FileUpload.Label>Drop your files here</_FileUpload.Label>
        <_FileUpload.Trigger asChild>
          <Button size='sm'>Open Dialog</Button>
        </_FileUpload.Trigger>
      </_FileUpload.Dropzone>
      <_FileUpload.ItemGroup>
        <_FileUpload.Context>
          {({ acceptedFiles }) =>
            acceptedFiles.map((file, id) => (
              <_FileUpload.Item key={id} file={file}>
                <_FileUpload.ItemPreview type='image/*'>
                  <_FileUpload.ItemPreviewImage />
                </_FileUpload.ItemPreview>
                <_FileUpload.ItemName />
                <_FileUpload.ItemSizeText />
                <_FileUpload.ItemDeleteTrigger asChild>
                  <IconButton variant='link' size='sm'>
                    <Trash2Icon />
                  </IconButton>
                </_FileUpload.ItemDeleteTrigger>
              </_FileUpload.Item>
            ))
          }
        </_FileUpload.Context>
      </_FileUpload.ItemGroup>
      <_FileUpload.HiddenInput />
    </_FileUpload.Root>
  )
}
*/
