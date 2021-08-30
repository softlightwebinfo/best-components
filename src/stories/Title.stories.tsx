import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Title } from "../components/Titlte/Title";

export default {
  title: 'Base/Title/Default',
  component: Title,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title { ...args } />;
export const Default = Template.bind({});
Default.args = {
  children: "All Accounts",
};
