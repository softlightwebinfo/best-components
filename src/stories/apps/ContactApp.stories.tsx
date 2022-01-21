import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { ContactApp } from "../../apps/ContactApp/ContactApp";

export default {
  title: 'App/Contact/Default',
  component: ContactApp,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof ContactApp>;

const Template: ComponentStory<typeof ContactApp> = (args) => (
  <ContactApp { ...args } />
);

export const Default = Template.bind({});

Default.args = {};
