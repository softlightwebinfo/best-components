import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Avatar } from "../components/Avatar/Avatar";

export default {
  title: 'Base/Avatar/Default',
  component: Avatar,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar { ...args } />;
export const Default = Template.bind({});
Default.args = {
  image: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png",
  name: "Avatar",
  alt: "Avatar",
};
