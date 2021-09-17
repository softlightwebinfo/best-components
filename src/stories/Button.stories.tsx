import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "../components";

export default {
  title: 'Base/Button/Default',
  component: Button,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button { ...args } />;
export const Default = Template.bind({});
Default.args = {
  children: "Default",
};
export const Dashed = Template.bind({});
Dashed.args = {
  children: "Dashed",
  dashed: true,
};
export const Round = Template.bind({});
Round.args = {
  children: "Dashed",
  round: true,
};
export const Size = Template.bind({});
Size.args = {
  children: "Dashed",
  round: true,
  size: "md",
};
