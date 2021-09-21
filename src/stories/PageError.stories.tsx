import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "../components";
import { PageError } from "../components/PageError/PageError";

export default {
  title: 'Base/PageError/Default',
  component: PageError,
  argTypes: {},
  args: {},
  layout: 'fullscreen',
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError { ...args } />;
export const Default = Template.bind({});
Default.args = {
  code: 404,
  title: "Error Occured",
  description: "We are sorry but your request contains bad syntax and cannot be fyllied.",
  color: true,
  children: (
    <Button icon={ <i className={ "fa fa-arrow-left" }/> } size={ "lg" }>Back to Dashboard</Button>
  ),
};
