// Reference: https://park-ui.com/docs/panda/components/button

import { type ButtonProps, Button as _Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export const Button = (props: ButtonProps) => {
  return (
    <_Button {...props}>
      Button
      <ArrowRightIcon />
    </_Button>
  );
};
