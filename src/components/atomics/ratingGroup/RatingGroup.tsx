// Reference: https://park-ui.com/docs/panda/components/rating-group

import {
  type RatingGroupProps,
  RatingGroup as _RatingGroup,
} from "@/components/ui/rating-group";

export const RatingGroup = (props: RatingGroupProps) => {
  return (
    <_RatingGroup defaultValue={3} {...props}>
      Label
    </_RatingGroup>
  );
};
