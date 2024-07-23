// Reference: https://park-ui.com/docs/panda/components/editable

import { Button } from "@/components/ui/button";
import * as _Editable from "@/components/ui/editable";
import { FormLabel } from "@/components/ui/form-label";

export const Editable = (props: _Editable.RootProps) => {
  return (
    <_Editable.Root
      placeholder="Your favorite Framework"
      defaultValue="Double click to edit"
      activationMode="dblclick"
      {...props}
    >
      <_Editable.Label asChild>
        <FormLabel>Framework</FormLabel>
      </_Editable.Label>
      <_Editable.Area>
        <_Editable.Input />
        <_Editable.Preview />
      </_Editable.Area>
      <_Editable.Context>
        {(editable) => (
          <_Editable.Control>
            {editable.editing ? (
              <>
                <_Editable.SubmitTrigger asChild>
                  <Button variant="link">Save</Button>
                </_Editable.SubmitTrigger>
                <_Editable.CancelTrigger asChild>
                  <Button variant="link">Cancel</Button>
                </_Editable.CancelTrigger>
              </>
            ) : (
              <_Editable.EditTrigger asChild>
                <Button variant="link">Edit</Button>
              </_Editable.EditTrigger>
            )}
          </_Editable.Control>
        )}
      </_Editable.Context>
    </_Editable.Root>
  );
};
