import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Input } from "../components";
import { FormGroup } from "../components/FormGroup/FormGroup";

export default {
  title: 'Base/FormGroup/Default',
  component: FormGroup,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof FormGroup>;

const Template: ComponentStory<typeof FormGroup> = (args) => (
  <form>
    <FormGroup label={ "Text" }>
      <Input placeholder={ "Enter your name" }/>
    </FormGroup>
    <FormGroup label={ "Email" }>
      <Input placeholder={ "Enter your email" } type={ "email" }/>
    </FormGroup>
    <FormGroup label={ "Password" }>
      <Input placeholder={ "Enter your password" } type={ "password" }/>
    </FormGroup>
  </form>
);
export const Default = Template.bind({});
Default.args = {};
