import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AvatarUser, Button, Divider, Dropdown, DropdownItem } from "../components";

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
const Template2: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown { ...args } trigger={ <Button>John Doe</Button> }>
    <DropdownItem>
      <AvatarUser
        title={ "John Doe" }
        subTitle={ "john.doe@example.com" }
      />
    </DropdownItem>
    <DropdownItem icon={ <i className={ "fa fa-envelope" }/> } badge={ "3" }>Notifications</DropdownItem>
    <DropdownItem  icon={ <i className={ "fa fa-envelope" }/> } badge={ "10" }>Inbox</DropdownItem>
    <Divider/>
    <DropdownItem>Settings</DropdownItem>
    <Divider/>
    <DropdownItem>SignOut</DropdownItem>
  </Dropdown>
);
export const Default = Template.bind({});
Default.args = {};
export const Avatar = Template2.bind({});
Avatar.args = {};
