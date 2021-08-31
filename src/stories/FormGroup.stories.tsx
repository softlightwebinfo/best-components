import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { FormGroup, Input } from "../components";
import { Textarea } from "../components/Textarea/Textarea";

export default {
  title: 'Form/FormGroup/Default',
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
const Template2: ComponentStory<typeof FormGroup> = (args) => (
  <form>
    <FormGroup label={ "Text" }>
      <Textarea placeholder={ "Enter your name" }/>
    </FormGroup>
  </form>
);

export const Default = Template.bind({});
Default.args = {};

export const TextareaForm = Template2.bind({});
TextareaForm.args = {};
