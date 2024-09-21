// Reference: https://park-ui.com/docs/panda/components/accordion

import * as _Accordion from '@/components/ui/accordion'
import { ChevronDownIcon } from 'lucide-react'

export const Accordion = (props: _Accordion.RootProps) => {
  const items = ['React', 'Solid', 'Svelte', 'Vue']
  return (
    <_Accordion.Root defaultValue={['React']} multiple {...props}>
      {items.map((item, id) => (
        <_Accordion.Item key={id} value={item} disabled={item === 'Svelte'}>
          <_Accordion.ItemTrigger>
            {item}
            <_Accordion.ItemIndicator>
              <ChevronDownIcon />
            </_Accordion.ItemIndicator>
          </_Accordion.ItemTrigger>
          <_Accordion.ItemContent>
            Pudding donut oat cake marzipan biscuit tart. Dessert macaroon ice cream bonbon jelly.
            Jelly topping tiramisu halvah lollipop.
          </_Accordion.ItemContent>
        </_Accordion.Item>
      ))}
    </_Accordion.Root>
  )
}
