import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { GridImageItem } from "../components/GridImageItem/GridImageItem";

export default {
  title: 'Base/Grid/GridImageItem',
  component: GridImageItem,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof GridImageItem>;

const Template: ComponentStory<typeof GridImageItem> = (args) => (
  <div style={ { display: 'flex', gap: 40 } }>
    <GridImageItem{ ...args }/>
  </div>
);
export const Default = Template.bind({});
Default.args = {
  imageLeft: "https://compass-ssl.microsoft.com/assets/f9/4c/f94c2916-6a4e-4cbc-9bc1-9f0e0f4ee46c.png?n=ioc_home_bottomleft_4up_491x276.png"
,
  imageRight: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
,
};
