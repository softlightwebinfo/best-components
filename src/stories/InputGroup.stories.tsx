import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "../components";
import { Alert } from "../components/Alert/Alert";
import { ButtonToolbar } from "../components/ButtonToolbar/ButtonToolbar";

export default {
  title: 'Base/Alert/Default',
  component: Alert,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert { ...args } />;
export const Default = Template.bind({});
Default.args = {
  message: "This is just a reminder to update your personal data.",
};

export const Right = Template.bind({});
Right.args = {
  message: "This is just a reminder to update your personal data.",
  right: (
    <a href="">Account</a>
  ),
};
export const Title = Template.bind({});
Title.args = {
  title: "It´s time for an update",
  message: "v2.0 is now available and comes packed with amazing features. Would you like to install it now?",
};
export const Actions = Template.bind({});
Actions.args = {
  title: "It´s time for an update",
  message: "v2.0 is now available and comes packed with amazing features. Would you like to install it now?",
  actions: (
    <ButtonToolbar>
      <Button>Go Back</Button>
      <Button default>Reinstall</Button>
    </ButtonToolbar>
  ),
};
export const Type = Template.bind({});
Type.args = {
  title: "It´s time for an update",
  message: "v2.0 is now available and comes packed with amazing features. Would you like to install it now?",
  type: "info",
  actions: (
    <ButtonToolbar>
      <Button>Go Back</Button>
      <Button default>Reinstall</Button>
    </ButtonToolbar>
  ),
};
export const IsCloseable = Template.bind({});
IsCloseable.args = {
  message: "v2.0 is now available and comes packed with amazing features. Would you like to install it now?",
  isCloseable: true,
  right: (<Button>About us</Button>),
};
export const IsIcon = Template.bind({});
IsIcon.args = {
  message: "v2.0 is now available and comes packed with amazing features. Would you like to install it now?",
  isCloseable: true,
  isIcon: true,
  right: (<Button>About us</Button>),
};
export const AlertDanger = Template.bind({});
AlertDanger.args = {
  message: "Please fix the following errors:",
  isIcon: true,
  type: "danger",
  data: [
    "Emails is a required field",
    "Password must have at least 8 character",
    "Please enter your age",
  ],
};
