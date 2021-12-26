import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { GridDefault } from "../../components";
import { StatButtonWidget } from "../../widget/StatWidget/StatButtonWidget";

export default {
  title: 'Widget/Stat/Button',
  component: StatButtonWidget,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof StatButtonWidget>;

const Template: ComponentStory<typeof StatButtonWidget> = (args) => <StatButtonWidget { ...args } />;
export const Default = Template.bind({});
Default.args = {
  title: "Tickets",
  number: 128,
  previousNumber: 200,
  subTitle: "From Previous month",
};
const TemplateBase: ComponentStory<typeof StatButtonWidget> = (args) => (
  <GridDefault auto={ 300 } margin>
    { [...new Array(20)].map((item, index) => (
      <StatButtonWidget { ...args } key={ index }/>
    )) }
  </GridDefault>
);
export const GridBase = TemplateBase.bind({});
GridBase.args = {
  title: "Tickets",
  number: 128,
  previousNumber: 200,
  subTitle: "From Previous month",
};
