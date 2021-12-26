import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Panel } from "../components/Panel/Panel";

export default {
  title: 'Base/Panel/Default',
  component: Panel,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Panel>;

const Template: ComponentStory<typeof Panel> = (args) => <Panel { ...args } />;
export const Default = Template.bind({});
Default.args = {
  title: "What's New",
  children: "Hello world!",
};
