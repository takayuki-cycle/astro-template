// Reference: https://park-ui.com/docs/panda/components/icon-button

import {
  type IconButtonProps,
  IconButton as _IconButton,
} from "@/components/ui/icon-button";
import { ArrowRightIcon } from "lucide-react";

export const IconButton = (props: IconButtonProps) => {
  return (
    <_IconButton {...props} aria-label="Next Page">
      <ArrowRightIcon />
    </_IconButton>
  );
};
