import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "../components";
import { CardHeading } from "../components/CardHeading/CardHeading";
import { Content } from "../components/Content/Content";

export default {
  title: 'Base/Card/Heading',
  component: CardHeading,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof CardHeading>;

const Template: ComponentStory<typeof CardHeading> = (args) => (
  <CardHeading { ...args }/>
);
export const Default = Template.bind({});
Default.args = {
  title: "All Accounts",
  subTitle: "Manage all your customers",
  children: (
    <Content isCenter>Content</Content>
  ),
};
export const Action = Template.bind({});
Action.args = {
  title: "All Accounts",
  subTitle: "Manage all your customers",
  actions: (
    <Button icon={ <i className={ "fa fa-plus" }/> }>New Invoice</Button>
  ),
  children: (
    <Content isCenter>Content</Content>
  ),
};
export const Actions = Template.bind({});
Actions.args = {
  title: "Manage Payments",
  subTitle: <span>You have <a href="">3 pending invoices</a> and <a href="">1 dispute</a></span>,
  actions: (
    <Button icon={ <i className={ "fa fa-plus" }/> }>New Invoice</Button>
  ),
  children: (
    <Content isCenter>Content</Content>
  ),
};
