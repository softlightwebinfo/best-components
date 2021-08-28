import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Badge } from "../components/Badge/Badge";

export default {
  title: 'Base/Badge/Default',
  component: Badge,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge { ...args } />;
export const Default = Template.bind({});
Default.args = {
  label: "Badge",
};
export const Icon = Template.bind({});
Icon.args = {
  icon: <i className={"fa fa-check"}/>,
  label: "Badge",
};
