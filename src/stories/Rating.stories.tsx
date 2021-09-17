import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Rating } from "../components/Rating/Rating";

export default {
  title: 'Base/Rating/Default',
  component: Rating,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating { ...args } />;
export const Default = Template.bind({});
Default.args = {};
