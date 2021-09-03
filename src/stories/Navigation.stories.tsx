import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Navigation } from "../components/Navigation/Navigation";

export default {
  title: 'Base/Navigation/Default',
  component: Navigation,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => <Navigation { ...args } />;
export const Default = Template.bind({});
Default.args = {
  initialOpen: ["dashboard"],
  style: { width: 400 },
  data: [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: <i className={ "fa fa-home" }/>,
      badge: "3",
    },
    {
      label: "Profile",
      icon: <i className={ "fa fa-user" }/>,
      key: "profile",
      menu: [
        {
          key: "my-profile",
          label: "My profile",
          icon: <i className={ "fa fa-user" }/>,
        },
        {
          key: "settings",
          label: "Settings",
          icon: <i className={ "fa fa-cogs" }/>,
        },
        {
          key: "notifications",
          label: "Notifications",
          icon: <i className={ "fa fa-not-equal" }/>,
        },
      ],
    },
    { heading: "Projects" },
    {
      key: "manage",
      label: "Manage",
      icon: <i className={ "fa fa-home" }/>,
      badge: "99",
    },
    {
      key: "task",
      label: "Tasks",
      icon: <i className={ "fa fa-home" }/>,
      badge: "9",
    },
    {
      key: "clients",
      label: "Clients",
      icon: <i className={ "fa fa-home" }/>,
      badge: "26",
    },
    {
      key: "add-new",
      label: "Add New",
      icon: <i className={ "fa fa-plus" }/>,
    },
    { heading: "More" },
    {
      key: "preferences",
      label: "Preferences",
      icon: <i className={ "fa fa-cog" }/>,
    },
    {
      key: "logout",
      label: "Log out",
      icon: <i className={ "fa fa-lock" }/>,
    },
  ],
};
