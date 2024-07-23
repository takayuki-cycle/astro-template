// Reference: https://park-ui.com/docs/panda/components/progress

import {
  type ProgressProps,
  Progress as _Progress,
} from "@/components/ui/progress";
import { useEffect, useState } from "react";

export const Progress = (props: ProgressProps) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((value) => (value === 100 ? 0 : value + 1));
    }, Math.random() * 500);

    return () => clearInterval(interval);
  });

  return <_Progress {...props} value={value} min={0} max={100} />;
};
