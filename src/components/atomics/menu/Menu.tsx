// Reference: https://park-ui.com/docs/panda/components/menu

import { Button } from '@/components/ui/button'
import * as _Menu from '@/components/ui/menu'
import { Text } from '@/components/ui/text'
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
} from 'lucide-react'
import { HStack } from 'styled-system/jsx'

export const Menu = (props: _Menu.RootProps) => {
  return (
    <_Menu.Root {...props}>
      <_Menu.Trigger asChild>
        <Button variant='outline' size={props.size}>
          Open Menu
        </Button>
      </_Menu.Trigger>
      <_Menu.Positioner>
        <_Menu.Content>
          <_Menu.ItemGroup>
            <_Menu.ItemGroupLabel>My Account</_Menu.ItemGroupLabel>
            <_Menu.Separator />
            <_Menu.Item value='profile'>
              <HStack gap='6' justify='space-between' flex='1'>
                <HStack gap='2'>
                  <UserIcon />
                  Profile
                </HStack>
                <Text as='span' color='fg.subtle' size='sm'>
                  ⇧⌘P
                </Text>
              </HStack>
            </_Menu.Item>
            <_Menu.Item value='billing'>
              <HStack gap='2'>
                <CreditCardIcon /> Billing
              </HStack>
            </_Menu.Item>
            <_Menu.Item value='settings'>
              <HStack gap='6' justify='space-between' flex='1'>
                <HStack gap='2'>
                  <SettingsIcon /> Settings
                </HStack>
                <Text as='span' color='fg.subtle' size='sm'>
                  ⌘,
                </Text>
              </HStack>
            </_Menu.Item>
            <_Menu.Root positioning={{ placement: 'right-start', gutter: -2 }} {...props}>
              <_Menu.TriggerItem justifyContent='space-between'>
                <HStack gap='2'>
                  <UserPlusIcon />
                  Invite member
                </HStack>
                <ChevronRightIcon />
              </_Menu.TriggerItem>
              <_Menu.Positioner>
                <_Menu.Content>
                  <_Menu.Item value='email'>
                    <HStack gap='2'>
                      <MailIcon /> Email
                    </HStack>
                  </_Menu.Item>
                  <_Menu.Item value='message'>
                    <HStack gap='2'>
                      <MessageSquareIcon /> Message
                    </HStack>
                  </_Menu.Item>
                  <_Menu.Separator />
                  <_Menu.Item value='other'>
                    <HStack gap='2'>
                      <PlusCircleIcon />
                      More Options...
                    </HStack>
                  </_Menu.Item>
                </_Menu.Content>
              </_Menu.Positioner>
            </_Menu.Root>
            <_Menu.Separator />
            <_Menu.Item value='logout'>
              <HStack gap='2'>
                <LogOutIcon />
                Logout
              </HStack>
            </_Menu.Item>
          </_Menu.ItemGroup>
        </_Menu.Content>
      </_Menu.Positioner>
    </_Menu.Root>
  )
}
