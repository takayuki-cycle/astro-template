import { type SwitchProps, Switch as _Switch } from "@/components/ui/switch";

export const Switch = (props: SwitchProps) => {
  return (
    <_Switch defaultChecked {...props}>
      Label
    </_Switch>
  );
};
