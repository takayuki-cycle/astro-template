// Reference: https://park-ui.com/docs/panda/components//radio-button-group

import * as _RadioButtonGroup from "@/components/ui/radio-button-group";

export const RadioButtonGroup = (props: _RadioButtonGroup.RootProps) => {
  const options = [
    { value: "S" },
    { value: "M" },
    { value: "L", disabled: true },
    { value: "XL" },
  ];

  return (
    <_RadioButtonGroup.Root defaultValue="M" {...props}>
      {options.map((option, id) => (
        <_RadioButtonGroup.Item
          key={id}
          value={option.value}
          disabled={option.disabled || false}
          px="0"
        >
          <_RadioButtonGroup.ItemControl />
          <_RadioButtonGroup.ItemText>
            {option.value}
          </_RadioButtonGroup.ItemText>
        </_RadioButtonGroup.Item>
      ))}
    </_RadioButtonGroup.Root>
  );
};
