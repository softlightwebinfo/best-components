import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "../components";
import { Divider } from "../components/Divider/Divider";
import { Dropdown } from "../components/Dropdown/Dropdown";
import { DropdownItem } from "../components/Dropdown/DropdownItem";

export default {
  title: 'Base/Dropdown/Default',
  component: Dropdown,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown { ...args } trigger={ <Button>John Doe</Button> }>
    <DropdownItem>Profile</DropdownItem>
    <DropdownItem>Inbox</DropdownItem>
    <Divider/>
    <DropdownItem>Settings</DropdownItem>
    <Divider/>
    <DropdownItem>SignOut</DropdownItem>
  </Dropdown>
);
export const Default = Template.bind({});
Default.args = {};
