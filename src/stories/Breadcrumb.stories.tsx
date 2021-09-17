import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Breadcrumb } from "../components/Breadcrumb/Breadcrumb";

export default {
  title: 'Base/Breadcrumb/Default',
  component: Breadcrumb,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => <Breadcrumb { ...args } />;
export const Default = Template.bind({});
Default.args = {
  data: [
    { label: "Dashboard", url: "/" },
    { label: "Settings", url: "/settings" },
    { label: "Profile" },
  ],
};
