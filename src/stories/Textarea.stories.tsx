import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Input, Textarea } from "../components";

export default {
  title: 'Form/Textarea/Default',
  component: Textarea,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea { ...args }/>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter your name",
};
