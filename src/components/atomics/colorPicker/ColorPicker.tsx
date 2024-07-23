// Reference: https://park-ui.com/docs/panda/components/color-Picker

import { Text } from "@/components/atomics/text/Text";
import * as _ColorPicker from "@/components/ui/color-picker";
import { IconButton } from "@/components/ui/icon-button";
import { Input } from "@/components/ui/input";
import { PipetteIcon } from "lucide-react";
import { HStack, Stack } from "styled-system/jsx";

export const ColorPicker = (props: _ColorPicker.RootProps) => {
  return (
    <_ColorPicker.Root {...props}>
      <_ColorPicker.Context>
        {(api) => (
          <>
            <_ColorPicker.Label>Color Picker</_ColorPicker.Label>
            <_ColorPicker.Control>
              <_ColorPicker.ChannelInput channel="hex" asChild>
                <Input />
              </_ColorPicker.ChannelInput>
              <_ColorPicker.Trigger asChild>
                <IconButton variant="outline">
                  <_ColorPicker.Swatch value={api.value} />
                </IconButton>
              </_ColorPicker.Trigger>
            </_ColorPicker.Control>
            <_ColorPicker.Positioner>
              <_ColorPicker.Content>
                <Stack columnGap="3" rowGap="3">
                  <_ColorPicker.Area>
                    <_ColorPicker.AreaBackground />
                    <_ColorPicker.AreaThumb />
                  </_ColorPicker.Area>
                  <HStack columnGap="3" rowGap="3">
                    <_ColorPicker.EyeDropperTrigger asChild>
                      <IconButton
                        size="xs"
                        variant="outline"
                        aria-label="Pick a color"
                      >
                        <PipetteIcon />
                      </IconButton>
                    </_ColorPicker.EyeDropperTrigger>
                    <Stack
                      columnGap="2"
                      rowGap="2"
                      flexGrow="1"
                      flexShrink="1"
                      flexBasis="0"
                    >
                      <_ColorPicker.ChannelSlider channel="hue">
                        <_ColorPicker.ChannelSliderTrack />
                        <_ColorPicker.ChannelSliderThumb />
                      </_ColorPicker.ChannelSlider>
                      <_ColorPicker.ChannelSlider channel="alpha">
                        <_ColorPicker.TransparencyGrid size="8px" />
                        <_ColorPicker.ChannelSliderTrack />
                        <_ColorPicker.ChannelSliderThumb />
                      </_ColorPicker.ChannelSlider>
                    </Stack>
                  </HStack>
                  <HStack>
                    <_ColorPicker.ChannelInput channel="hex" asChild>
                      <Input size="2xs" />
                    </_ColorPicker.ChannelInput>
                    <_ColorPicker.ChannelInput channel="alpha" asChild>
                      <Input size="2xs" />
                    </_ColorPicker.ChannelInput>
                  </HStack>
                  <Stack columnGap="1.5" rowGap="1.5">
                    <Text size="xs" fontWeight="medium" color="fg.default">
                      Saved Colors
                    </Text>
                    <_ColorPicker.SwatchGroup>
                      {presets.map((color, id) => (
                        <_ColorPicker.SwatchTrigger key={id} value={color}>
                          <_ColorPicker.Swatch value={color} />
                        </_ColorPicker.SwatchTrigger>
                      ))}
                    </_ColorPicker.SwatchGroup>
                  </Stack>
                </Stack>
              </_ColorPicker.Content>
            </_ColorPicker.Positioner>
          </>
        )}
      </_ColorPicker.Context>
    </_ColorPicker.Root>
  );
};

const presets = [
  "hsl(10, 81%, 59%)",
  "hsl(60, 81%, 59%)",
  "hsl(100, 81%, 59%)",
  "hsl(175, 81%, 59%)",
  "hsl(190, 81%, 59%)",
  "hsl(205, 81%, 59%)",
  "hsl(220, 81%, 59%)",
  "hsl(250, 81%, 59%)",
  "hsl(280, 81%, 59%)",
  "hsl(350, 81%, 59%)",
];
