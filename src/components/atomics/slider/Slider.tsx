// Reference: https://park-ui.com/docs/panda/components/slider

import { type SliderProps, Slider as _Slider } from "@/components/ui/slider";

export const Slider = (props: SliderProps) => {
  return (
    <_Slider
      value={[33]}
      marks={[
        { value: 25, label: "25" },
        { value: 50, label: "50" },
        { value: 75, label: "75" },
      ]}
      {...props}
    />
  );
};
