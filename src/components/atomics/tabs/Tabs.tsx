// Reference: https://park-ui.com/docs/panda/components/tabs

import * as _Tabs from "@/components/ui/tabs";

export const Tabs = (props: _Tabs.RootProps) => {
  const options = [
    { id: "react", label: "React" },
    { id: "solid", label: "Solid" },
    { id: "svelte", label: "Svelte", disabled: true },
    { id: "vue", label: "Vue" },
  ];
  return (
    <_Tabs.Root defaultValue="react" {...props}>
      <_Tabs.List>
        {options.map((option) => (
          <_Tabs.Trigger
            key={option.id}
            value={option.id}
            disabled={option.disabled || false}
          >
            {option.label}
          </_Tabs.Trigger>
        ))}
        <_Tabs.Indicator />
      </_Tabs.List>
      <_Tabs.Content value="react">Know React? Check out Solid!</_Tabs.Content>
      <_Tabs.Content value="solid">Know Solid? Check out Svelte!</_Tabs.Content>
      <_Tabs.Content value="svelte">Know Svelte? Check out Vue!</_Tabs.Content>
      <_Tabs.Content value="vue">Know Vue? Check out React!</_Tabs.Content>
    </_Tabs.Root>
  );
};
