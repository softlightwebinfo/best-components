import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Badge } from "../components";
import { DividerHeading } from "../components/Divider/DividerHeading/DividerHeading";

export default {
  title: 'Base/DividerHeading/Default',
  component: DividerHeading,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof DividerHeading>;

const Template: ComponentStory<typeof DividerHeading> = (args) => <DividerHeading { ...args } />;
export const Default = Template.bind({});
Default.args = {
  children: "Title",
};
export const Component = Template.bind({});
Component.args = {
  children: <Badge label={"Load more..."}/>,
};
