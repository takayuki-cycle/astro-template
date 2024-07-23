// Reference: https://park-ui.com/docs/panda/components/select

import * as _Select from "@/components/ui/select";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";

export const Select = (props: _Select.RootProps) => {
  const items = [
    { label: "React", value: "react" },
    { label: "Solid", value: "solid" },
    { label: "Svelte", value: "svelte", disabled: true },
    { label: "Vue", value: "vue" },
  ];

  return (
    <_Select.Root
      positioning={{ sameWidth: true }}
      width="2xs"
      {...props}
      items={items}
    >
      <_Select.Label>Framework</_Select.Label>
      <_Select.Control>
        <_Select.Trigger>
          <_Select.ValueText placeholder="Select a Framework" />
          <ChevronsUpDownIcon />
        </_Select.Trigger>
      </_Select.Control>
      <_Select.Positioner>
        <_Select.Content>
          <_Select.ItemGroup>
            <_Select.ItemGroupLabel>Framework</_Select.ItemGroupLabel>
            {items.map((item) => (
              <_Select.Item key={item.value} item={item}>
                <_Select.ItemText>{item.label}</_Select.ItemText>
                <_Select.ItemIndicator>
                  <CheckIcon />
                </_Select.ItemIndicator>
              </_Select.Item>
            ))}
          </_Select.ItemGroup>
        </_Select.Content>
      </_Select.Positioner>
    </_Select.Root>
  );
};
