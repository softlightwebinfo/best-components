import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { GridDefault } from "../../components";
import { StatWidget } from "../../widget/StatWidget/StatWidget";

export default {
  title: 'Widget/Stat/Default',
  component: StatWidget,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof StatWidget>;

const Template: ComponentStory<typeof StatWidget> = (args) => <StatWidget { ...args } />;
export const Default = Template.bind({});
Default.args = {
  title: "1 TB",
  subtitle: "Documents",
  progress: 25,
};
const TemplateBase: ComponentStory<typeof StatWidget> = (args) => (
  <GridDefault auto={300} margin>
    { [...new Array(20)].map((item,index) => (
      <StatWidget { ...args } key={index}/>
    )) }
  </GridDefault>
);
export const GridBase = TemplateBase.bind({});
GridBase.args = {
  title: "1 TB",
  subtitle: "Documents",
  progress: 25,
};
