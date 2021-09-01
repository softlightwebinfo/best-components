import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Checkbox } from "../components/Checkbox/Checkbox";

export default {
  title: 'Form/Checkbox/Default',
  component: Checkbox,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox { ...args } />;
export const Default = Template.bind({});
Default.args = {
  label: "Checked",
};
