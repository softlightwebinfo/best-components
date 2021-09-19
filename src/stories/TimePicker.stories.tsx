import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Card } from "../components";
import { TimePicker } from "../components/TimePicker/TimePicker";

export default {
  title: 'Base/TimePicker/Default',
  component: TimePicker,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof TimePicker>;

const Template: ComponentStory<typeof TimePicker> = (args) => (
  <Card style={{display: 'inline-flex'}}>
    <TimePicker { ...args } />
  </Card>
);
export const Default = Template.bind({});
Default.args = {};
