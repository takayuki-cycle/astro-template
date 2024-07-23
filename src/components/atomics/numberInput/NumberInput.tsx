// Reference: https://park-ui.com/docs/panda/components/number-input

import {
  type NumberInputProps,
  NumberInput as _NumberInput,
} from "@/components/ui/number-input";

export const NumberInput = (props: NumberInputProps) => {
  return (
    <_NumberInput defaultValue="3" {...props}>
      Label
    </_NumberInput>
  );
};
