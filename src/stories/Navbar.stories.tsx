import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
// @ts-ignore
import Logos from '../assets/logo.png';
import { AvatarUser, Button, Divider, Dropdown, DropdownItem, Input, Item } from "../components";
import { Navbar } from "../components/Navbar/Navbar";
import { NavbarItem } from "../components/Navbar/NavbarItem";
import { NavbarLogo } from "../components/Navbar/NavbarLogo";
import { NavbarRight } from "../components/Navbar/NavbarRight";

export default {
  title: 'Base/Navbar/Default',
  component: Navbar,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar { ...args } />;
const TemplateContent: ComponentStory<typeof Navbar> = (args) => (
  <Navbar { ...args } >
    <NavbarItem>
      <NavbarLogo image={ Logos } title={ "Logo" }/>
    </NavbarItem>
    <NavbarItem>
      <Input style={ { width: 300 } } dark placeholder={ "Busca en wooswin" } search rounded/>
    </NavbarItem>
    <Item>
      <a href="http://localhost:8888">
        <NavbarItem><i className="fa fa-home mr-2"/> Pagina principal</NavbarItem>
      </a>
    </Item>
    <Item>
      <NavbarItem><i className="fa fa-home mr-2"/> Eventos</NavbarItem>
    </Item>
    <NavbarRight>
      <NavbarItem>
        <Dropdown trigger={ <Button>John Doe</Button> } placement={ "bottom-left" }>
          <DropdownItem>
            <AvatarUser
              title={ "John Doe" }
              subTitle={ "john.doe@example.com" }
            />
          </DropdownItem>
          <DropdownItem icon={ <i className={ "fa fa-envelope" }/> } badge={ "3" }>Notifications</DropdownItem>
          <DropdownItem icon={ <i className={ "fa fa-envelope" }/> } badge={ "10" }>Inbox</DropdownItem>
          <Divider>
            <DropdownItem>Settings</DropdownItem>
          </Divider>
          <Divider/>
          <DropdownItem>SignOut</DropdownItem>
        </Dropdown>
      </NavbarItem>
    </NavbarRight>
  </Navbar>
);
export const Default = Template.bind({});
Default.args = {
  fixed: true,
};
export const Content = TemplateContent.bind({});
Content.args = {
  fixed: true,
};
