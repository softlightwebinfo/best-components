import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Dropdown, DropdownItem, GridDefault, GridDefaultItem } from "../../components";
import { TaskLineCardWidget } from "../../widget/TaskLineCardWidget/TaskLineCardWidget";

export default {
  title: 'Widget/TaskLineCard/Default',
  component: TaskLineCardWidget,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof TaskLineCardWidget>;

const Template: ComponentStory<typeof TaskLineCardWidget> = (args) => <TaskLineCardWidget { ...args } />;
export const Default = Template.bind({});
Default.args = {
  title: "Client objective meeting",
  subTitle: "7 days",
  number: 10,
  numberTotal: 28,
  progress: 28,
  team: [
    { name: "Rafa Gonzalez" },
    { name: "Rafa Gonzalez" },
    { name: "Rafa Gonzalez" },
    { name: "Rafa Gonzalez" },
    { name: "Rafa Gonzalez" },
    { name: "Rafa Gonzalez" },
  ],
  actions: (<Dropdown placement={ "bottom-left" } trigger={ <i className={ "fa fa-ellipsis-v" }/> }>
    <DropdownItem>Mark as done</DropdownItem>
    <DropdownItem>Archive</DropdownItem>
  </Dropdown>),
};
const TemplateGrid: ComponentStory<typeof TaskLineCardWidget> = (args) => (
  <GridDefault col={ 1 } margin>
    { [...new Array(20)].map((_, index) => (
      <GridDefaultItem key={index}>
        <TaskLineCardWidget { ...args } />
      </GridDefaultItem>
    )) }
  </GridDefault>
);
export const GridBase = TemplateGrid.bind({});
GridBase.args = {
  title: "Client objective meeting",
  subTitle: "7 days",
  number: 10,
  numberTotal: 28,
  progress: 28,
  team: [
    { name: "Rafa Gonzalez" },
    { name: "Rafa Gonzalez" },
    { name: "Rafa Gonzalez" },
    { name: "Rafa Gonzalez" },
    { name: "Rafa Gonzalez" },
    { name: "Rafa Gonzalez" },
  ],
  actions: (<Dropdown placement={ "bottom-left" } trigger={ <i className={ "fa fa-ellipsis-v" }/> }>
    <DropdownItem>Mark as done</DropdownItem>
    <DropdownItem>Archive</DropdownItem>
  </Dropdown>),
};
