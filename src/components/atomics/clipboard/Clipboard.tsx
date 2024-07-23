// Reference: https://park-ui.com/docs/panda/components/clipboard

import * as _Clipboard from "@/components/ui/clipboard";
import { FormLabel } from "@/components/ui/form-label";
import { IconButton } from "@/components/ui/icon-button";
import { Input } from "@/components/ui/input";
import { CheckIcon, ClipboardCopyIcon } from "lucide-react";

export const Clipboard = (props: _Clipboard.RootProps) => {
  return (
    <_Clipboard.Root value="https://park-ui.com" {...props}>
      <_Clipboard.Label asChild>
        <FormLabel>Copy this link</FormLabel>
      </_Clipboard.Label>
      <_Clipboard.Control>
        <_Clipboard.Input asChild>
          <Input />
        </_Clipboard.Input>
        <_Clipboard.Trigger asChild>
          <IconButton variant="outline">
            <_Clipboard.Indicator copied={<CheckIcon />}>
              <ClipboardCopyIcon />
            </_Clipboard.Indicator>
          </IconButton>
        </_Clipboard.Trigger>
      </_Clipboard.Control>
    </_Clipboard.Root>
  );
};
