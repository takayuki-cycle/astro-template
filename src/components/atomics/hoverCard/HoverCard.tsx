// Reference: https://park-ui.com/docs/panda/components/hover-card

import { Link } from "@/components/atomics/link/Link";
import { Text } from "@/components/atomics/text/Text";
import { Avatar } from "@/components/ui/avatar";
import * as _HoverCard from "@/components/ui/hover-card";
import { Icon } from "@/components/ui/icon";
import { MapPinIcon } from "lucide-react";
import { HStack, Stack } from "styled-system/jsx";

export const HoverCard = (props: _HoverCard.RootProps) => {
  return (
    <_HoverCard.Root {...props}>
      <_HoverCard.Trigger asChild>
        <Link href="https://twitter.com/grizzly_codes/">@grizzly_codes</Link>
      </_HoverCard.Trigger>

      <_HoverCard.Positioner>
        <_HoverCard.Content>
          <_HoverCard.Arrow>
            <_HoverCard.ArrowTip />
          </_HoverCard.Arrow>
          <Stack columnGap="4" rowGap="4" direction="row">
            <Avatar
              name="Christian Schröter"
              src="https://avatars.githubusercontent.com/u/1846056"
            />
            <Stack columnGap="3" rowGap="3">
              <Stack columnGap="1" rowGap="1">
                <Text size="sm" fontWeight="semibold">
                  @grizzly_codes
                </Text>
                <Text size="sm" color="fg.muted">
                  Staff Software Engineer working at vivenu GmbH
                </Text>
              </Stack>
              <HStack columnGap="1" rowGap="1" color="fg.subtle">
                <Icon size="sm">
                  <MapPinIcon />
                </Icon>
                <Text size="xs">Joined Dezember 2011</Text>
              </HStack>
            </Stack>
          </Stack>
        </_HoverCard.Content>
      </_HoverCard.Positioner>
    </_HoverCard.Root>
  );
};
