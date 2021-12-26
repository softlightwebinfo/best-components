import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { CardGroup } from "../components/CardGroup/CardGroup";
import { TeamProjectWidget } from "../widget/TeamProjectWidget/TeamProjectWidget";

export default {
  title: 'Base/CardGroup/Default',
  component: CardGroup,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof CardGroup>;

const Template: ComponentStory<typeof CardGroup> = (args) => (
  <CardGroup { ...args } >
    <TeamProjectWidget
      date={ "Due Tomorrow" } numberTotal={ 20 } number={ 3 }
      team={ [
        { name: "Rafa Gonzalez", title: "" },
        { name: "Rafa Gonzalez", title: "" },
        { name: "Rafa Gonzalez", title: "" },
        { name: "Rafa Gonzalez", title: "" },
      ] }
      title={ "Source placeholders" } progress={ 21 }
    />
    <TeamProjectWidget
      date={ "Due Tomorrow" } numberTotal={ 20 } number={ 3 }
      team={ [
        { name: "Rafa Gonzalez", title: "" },
        { name: "Rafa Gonzalez", title: "" },
        { name: "Rafa Gonzalez", title: "" },
        { name: "Rafa Gonzalez", title: "" },
      ] }
      title={ "Source placeholders" } progress={ 21 }
    />
    <TeamProjectWidget
      date={ "Due Tomorrow" } numberTotal={ 20 } number={ 3 }
      team={ [
        { name: "Rafa Gonzalez", title: "" },
        { name: "Rafa Gonzalez", title: "" },
        { name: "Rafa Gonzalez", title: "" },
        { name: "Rafa Gonzalez", title: "" },
      ] }
      title={ "Source placeholders" } progress={ 21 }
    />
  </CardGroup>
);
export const Default = Template.bind({});
Default.args = {
  style: { width: 450, margin: "auto" },
  title: "Backlog",
  buttonText: "Add task",
  subTitle: "Add new task",
  actions: [
    { label: "Add task", value: "1" },
    { label: "Delete panel", value: "1" },
    { label: "Edit panel", value: "1" },
  ],
};
