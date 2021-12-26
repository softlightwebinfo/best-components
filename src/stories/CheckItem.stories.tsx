import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { CheckItem } from "../components/CheckItem/CheckItem";

export default {
  title: 'Base/CheckItem/Default',
  component: CheckItem,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof CheckItem>;

const Template: ComponentStory<typeof CheckItem> = (args) => <CheckItem { ...args } />;
export const Default = Template.bind({});
const Template2: ComponentStory<typeof CheckItem> = (args) => (
  <div style={ { padding: 20 } }>
    { [...new Array(10)].map((_, index) => <CheckItem { ...args } />) }
  </div>
);
Default.args = {
  title: "Identify three distinct aesthetic styles for boards",
};
export const List = Template2.bind({});
List.args = {
  title: "Identify three distinct aesthetic styles for boards",
};
