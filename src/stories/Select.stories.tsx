import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Select } from "../components/Select/Select";

export default {
  title: 'Base/Select/Default',
  component: Select,
  argTypes: {},
  args: {
    data: [
      {
        "label": "Eugenia",
        "value": "Eugenia",
        "role": "Master",
      },
      {
        "label": "Kariane",
        "value": "Kariane",
        "role": "Master",
      },
      {
        "label": "Louisa",
        "value": "Louisa",
        "role": "Master",
      },
      {
        "label": "Marty",
        "value": "Marty",
        "role": "Master",
      },
      {
        "label": "Kenya",
        "value": "Kenya",
        "role": "Master",
      },
      {
        "label": "Hal",
        "value": "Hal",
        "role": "Developer",
      },
      {
        "label": "Julius",
        "value": "Julius",
        "role": "Developer",
      },
      {
        "label": "Travon",
        "value": "Travon",
        "role": "Developer",
      },
      {
        "label": "Vincenza",
        "value": "Vincenza",
        "role": "Developer",
      },
      {
        "label": "Dominic",
        "value": "Dominic",
        "role": "Developer",
      },
      {
        "label": "Pearlie",
        "value": "Pearlie",
        "role": "Guest",
      },
      {
        "label": "Tyrel",
        "value": "Tyrel",
        "role": "Guest",
      },
      {
        "label": "Jaylen",
        "value": "Jaylen",
        "role": "Guest",
      },
      {
        "label": "Rogelio",
        "value": "Rogelio",
        "role": "Guest",
      },
    ],
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select { ...args } />;
const Template2: ComponentStory<typeof Select> = (args) => (
  <>
    <Select { ...args } />
    <Select { ...args } />
    <Select { ...args } />
  </>
);
export const Default = Template.bind({});
Default.args = {};
export const Group = Template.bind({});
Group.args = {
  groupBy: "role",
};
export const Functions = Template.bind({});
Functions.args = {
  groupBy: "role",
  placeholder: "Select user",
  renderMenuItem: (label, item) => (
    <div>
      <i className={ "fa fa-layout-group" }/> { label }
    </div>
  ),
  renderMenuGroup: (label, item) => {
    return (
      <div>
        <i className={ "fa fa-users" }/> { label } - ({ item.children.length })
      </div>
    );
  },
  renderValue: (value, item) => {
    return (
      <div>
        <span style={ { color: '#868484' } }>
          <i className={ "fa fa-user" }/> User:
        </span> { value }
      </div>
    );
  },
};
export const Block = Template.bind({});
Block.args = {
  groupBy: "role",
  placeholder: "Select user",
  block: true,
  button: {},
};
export const Search = Template.bind({});
Search.args = {
  groupBy: "role",
  placeholder: "Select user",
  block: true,
  button: {},
  showSearch: true,
};
export const Default2 = Template2.bind({});
Default2.args = {};
