import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Progress from "../components/Progress";

export default {
  title: 'Base/Progress/Default',
  component: Progress,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Progress>;

const Template: ComponentStory<typeof Progress> = (args) => <Progress { ...args } />;
export const Default = Template.bind({});
Default.args = {
  value: 20,
};
