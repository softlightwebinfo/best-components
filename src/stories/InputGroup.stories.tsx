import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Input, InputGroup, InputGroupAddon } from "../components";

export default {
  title: 'Base/InputGroup/Default',
  component: InputGroup,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof InputGroup>;

const Template: ComponentStory<typeof InputGroup> = (args) => (
  <InputGroup { ...args } >
    <Input placeholder={"https://example.com"}/>
    <InputGroupAddon>
      <i className={"fa fa-home"}/>
    </InputGroupAddon>
  </InputGroup>
);
export const Default = Template.bind({});
Default.args = {};
