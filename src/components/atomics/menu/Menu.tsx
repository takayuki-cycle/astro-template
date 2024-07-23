// Reference: https://park-ui.com/docs/panda/components/menu

import { Text } from "@/components/atomics/text/Text";
import { Button } from "@/components/ui/button";
import * as _Menu from "@/components/ui/menu";
import {
  ChevronRightIcon,
  CreditCardIcon,
  LogOutIcon,
  MailIcon,
  MessageSquareIcon,
  PlusCircleIcon,
  SettingsIcon,
  UserIcon,
  UserPlusIcon,
} from "lucide-react";
import { HStack } from "styled-system/jsx";

export const Menu = (props: _Menu.RootProps) => {
  return (
    <_Menu.Root {...props}>
      <_Menu.Trigger asChild>
        <Button variant="outline" size={props.size}>
          Open Menu
        </Button>
      </_Menu.Trigger>
      <_Menu.Positioner>
        <_Menu.Content>
          <_Menu.ItemGroup>
            <_Menu.ItemGroupLabel>My Account</_Menu.ItemGroupLabel>
            <_Menu.Separator />
            <_Menu.Item value="profile">
              <HStack
                columnGap="6"
                rowGap="6"
                justify="space-between"
                flexGrow="1"
                flexShrink="1"
                flexBasis="0"
              >
                <HStack columnGap="2" rowGap="2">
                  <UserIcon />
                  Profile
                </HStack>
                <Text as="span" color="fg.subtle" size="sm">
                  ⇧⌘P
                </Text>
              </HStack>
            </_Menu.Item>
            <_Menu.Item value="billing">
              <HStack columnGap="2" rowGap="2">
                <CreditCardIcon /> Billing
              </HStack>
            </_Menu.Item>
            <_Menu.Item value="settings">
              <HStack
                columnGap="6"
                rowGap="6"
                justify="space-between"
                flexGrow="1"
                flexShrink="1"
                flexBasis="0"
              >
                <HStack columnGap="2" rowGap="2">
                  <SettingsIcon /> Settings
                </HStack>
                <Text as="span" color="fg.subtle" size="sm">
                  ⌘,
                </Text>
              </HStack>
            </_Menu.Item>
            <_Menu.Root
              positioning={{ placement: "right-start", gutter: -2 }}
              {...props}
            >
              <_Menu.TriggerItem justifyContent="space-between">
                <HStack columnGap="2" rowGap="2">
                  <UserPlusIcon />
                  Invite member
                </HStack>
                <ChevronRightIcon />
              </_Menu.TriggerItem>
              <_Menu.Positioner>
                <_Menu.Content>
                  <_Menu.Item value="email">
                    <HStack columnGap="2" rowGap="2">
                      <MailIcon /> Email
                    </HStack>
                  </_Menu.Item>
                  <_Menu.Item value="message">
                    <HStack columnGap="2" rowGap="2">
                      <MessageSquareIcon /> Message
                    </HStack>
                  </_Menu.Item>
                  <_Menu.Separator />
                  <_Menu.Item value="other">
                    <HStack columnGap="2" rowGap="2">
                      <PlusCircleIcon />
                      More Options...
                    </HStack>
                  </_Menu.Item>
                </_Menu.Content>
              </_Menu.Positioner>
            </_Menu.Root>
            <_Menu.Separator />
            <_Menu.Item value="logout">
              <HStack columnGap="2" rowGap="2">
                <LogOutIcon />
                Logout
              </HStack>
            </_Menu.Item>
          </_Menu.ItemGroup>
        </_Menu.Content>
      </_Menu.Positioner>
    </_Menu.Root>
  );
};
