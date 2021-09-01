import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Input } from "../components";

export default {
  title: 'Form/Input/Default',
  component: Input,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Input { ...args }/>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter your name",
};
