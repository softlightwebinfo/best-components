import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { FileManager } from "../../apps/FileManager/FileManager";

export default {
  title: 'App/FileManager/Default',
  component: FileManager,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof FileManager>;

const Template: ComponentStory<typeof FileManager> = (args) => (
  <FileManager { ...args } />
);

export const Default = Template.bind({});

Default.args = {

};
