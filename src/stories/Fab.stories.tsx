import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Fab } from "../components/Fab/Fab";

export default {
  title: 'Base/Fab/Default',
  component: Fab,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Fab>;

const Template: ComponentStory<typeof Fab> = (args) => <Fab { ...args } />;
export const Default = Template.bind({});
Default.args = {
  icon: <i className={ "fa fa-plus" }/>,
};
