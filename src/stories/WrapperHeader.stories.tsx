import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { WrapperHeader } from "../components/WrapperHeader/WrapperHeader";

export default {
  title: 'Base/WrapperHeader/Default',
  component: WrapperHeader,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof WrapperHeader>;

const Template: ComponentStory<typeof WrapperHeader> = (args) => <WrapperHeader { ...args } >

</WrapperHeader>;
export const Default = Template.bind({});
Default.args = {};

