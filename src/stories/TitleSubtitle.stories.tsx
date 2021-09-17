import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { TitleSubtitle } from "../components/TitleSubtitle/TitleSubtitle";

export default {
  title: 'Base/TitleSubtitle/Default',
  component: TitleSubtitle,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof TitleSubtitle>;

const Template: ComponentStory<typeof TitleSubtitle> = (args) => <TitleSubtitle { ...args } />;
export const Default = Template.bind({});
Default.args = {
  title: "All Accounts",
  subTitle: "Manage all your customers",
};
