import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Chip } from "../components/Chip/Chip";

export default {
  title: 'Base/Chip/Default',
  component: Chip,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => (
  <Chip { ...args } />
);
export const Default = Template.bind({});
Default.args = {
  label: "Deleteable",
};
