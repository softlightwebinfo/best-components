import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Avatar } from "../components/Avatar/Avatar";
import { AvatarStacked } from "../components/AvatarStacked/AvatarStacked";

export default {
  title: 'Base/Avatar/Stacked',
  component: AvatarStacked,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof AvatarStacked>;

const Template: ComponentStory<typeof AvatarStacked> = (args) => (
  <AvatarStacked { ...args } >
    <Avatar image={ "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png" }/>
    <Avatar image={ "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png" }/>
    <Avatar image={ "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png" }/>
    <Avatar image={ "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png" }/>
    <Avatar image={ "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png" }/>
    <Avatar image={ "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png" }/>
  </AvatarStacked>
);

const Template2: ComponentStory<typeof AvatarStacked> = (args) => (
  <AvatarStacked { ...args } >
    <Avatar rounded image={ "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png" }/>
    <Avatar rounded image={ "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png" }/>
    <Avatar rounded image={ "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png" }/>
    <Avatar rounded image={ "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png" }/>
    <Avatar rounded image={ "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png" }/>
    <Avatar rounded image={ "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png" }/>
  </AvatarStacked>
);

export const Default = Template.bind({});
Default.args = {};
export const Rounded = Template2.bind({});
Default.args = {};
