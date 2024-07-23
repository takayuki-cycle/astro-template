// Reference: https://park-ui.com/docs/panda/components/radio-group

import * as _RadioGroup from "@/components/ui/radio-group";

export const RadioGroup = (props: _RadioGroup.RootProps) => {
  const options = [
    { id: "react", label: "React" },
    { id: "solid", label: "Solid" },
    { id: "svelte", label: "Svelte", disabled: true },
    { id: "vue", label: "Vue" },
  ];
  return (
    <_RadioGroup.Root defaultValue="react" {...props}>
      {options.map((option) => (
        <_RadioGroup.Item
          key={option.id}
          value={option.id}
          disabled={option.disabled || false}
        >
          <_RadioGroup.ItemControl />
          <_RadioGroup.ItemText>{option.label}</_RadioGroup.ItemText>
        </_RadioGroup.Item>
      ))}
    </_RadioGroup.Root>
  );
};
