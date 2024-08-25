// Reference: https://park-ui.com/docs/panda/components/combobox

/*
import * as _Combobox from '@/components/ui/combobox'
import { IconButton } from '@/components/ui/icon-button'
import { Input } from '@/components/ui/input'
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react'
import { useState } from 'react'

const data = [
  { label: 'React', value: 'react' },
  { label: 'Solid', value: 'solid' },
  { label: 'Svelte', value: 'svelte', disabled: true },
  { label: 'Vue', value: 'vue' },
]

export const Combobox = (props: _Combobox.RootProps) => {
  const [items, setItems] = useState(data)

  const handleChange = (e: _Combobox.InputValueChangeDetails) => {
    const filtered = data.filter((item) =>
      item.label.toLowerCase().includes(e.inputValue.toLowerCase()),
    )
    setItems(filtered.length > 0 ? filtered : data)
  }

  return (
    <_Combobox.Root width='2xs' onInputValueChange={handleChange} {...props} items={items}>
      <_Combobox.Label>Framework</_Combobox.Label>
      <_Combobox.Control>
        <_Combobox.Input placeholder='Select a Framework' asChild>
          <Input />
        </_Combobox.Input>
        <_Combobox.Trigger asChild>
          <IconButton variant='link' aria-label='open' size='xs'>
            <ChevronsUpDownIcon />
          </IconButton>
        </_Combobox.Trigger>
      </_Combobox.Control>
      <_Combobox.Positioner>
        <_Combobox.Content>
          <_Combobox.ItemGroup>
            <_Combobox.ItemGroupLabel>Frameworks</_Combobox.ItemGroupLabel>
            {items.map((item) => (
              <_Combobox.Item key={item.value} item={item}>
                <_Combobox.ItemText>{item.label}</_Combobox.ItemText>
                <_Combobox.ItemIndicator>
                  <CheckIcon />
                </_Combobox.ItemIndicator>
              </_Combobox.Item>
            ))}
          </_Combobox.ItemGroup>
        </_Combobox.Content>
      </_Combobox.Positioner>
    </_Combobox.Root>
  )
}
*/
