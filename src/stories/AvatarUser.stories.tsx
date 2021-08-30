import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { SubTitle } from "../components/Subtitle/SubTitle";

export default {
  title: 'Base/SubTitle/Default',
  component: SubTitle,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof SubTitle>;

const Template: ComponentStory<typeof SubTitle> = (args) => <SubTitle { ...args } />;
export const Default = Template.bind({});
Default.args = {
  children: "Manage al your customers",
};
