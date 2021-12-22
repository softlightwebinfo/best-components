import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AvatarUser, Divider, Dropdown, DropdownItem, Item, NavbarLogo, NavbarRight } from "../components";
import { Dashboard } from "../components/Dashboard/Dashboard";
// @ts-ignore
import Logos from '../assets/logo.png';

export default {
  title: 'Layout/Dashboard/Default',
  component: Dashboard,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Dashboard>;

const Template: ComponentStory<typeof Dashboard> = (args) => (
  <Dashboard
    { ...args }
    paddingBody
    navbar={ (
      <>
        <NavbarLogo image={ Logos } title={ "Logo" }/>
        <NavbarRight>
          <Dropdown trigger={ <AvatarUser size={ "sm" } title={ "Rafa Gonzalez" } subTitle={ "Administrator" }/> }>
            <DropdownItem>Home</DropdownItem>
            <DropdownItem>Settings</DropdownItem>
            <Divider/>
            <DropdownItem>Logout</DropdownItem>
          </Dropdown>
        </NavbarRight>
      </>
    ) }
    aside={ (
      <>
        <Item icon={ <i className={ "fa fa-home" }/> }>Home</Item>
        <Item icon={ <i className={ "fa fa-home" }/> }>Users</Item>
        <Item icon={ <i className={ "fa fa-home" }/> }>Settings</Item>
        <Item icon={ <i className={ "fa fa-home" }/> }>Logout</Item>
      </>
    ) }
  >
    Hello World
    <div style={ { height: 2000 } }/>
  </Dashboard>
);
export const Default = Template.bind({});
Default.args = {};
