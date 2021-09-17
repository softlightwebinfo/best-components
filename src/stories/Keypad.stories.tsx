import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Keypad } from "../components/Keypad/Keypad";

export default {
  title: 'Base/Keypad/Default',
  component: Keypad,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Keypad>;

const Template: ComponentStory<typeof Keypad> = (args) => <Keypad { ...args } />;
export const Default = Template.bind({});
Default.args = {};
