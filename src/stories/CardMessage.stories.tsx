import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button, ButtonToolbar, Input } from "../components";
import { CardMessage } from "../components/CardMessage/CardMessage";

export default {
  title: 'Base/CardMessage/Default',
  component: CardMessage,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof CardMessage>;

const Template: ComponentStory<typeof CardMessage> = (args) => <CardMessage { ...args } />;
export const Default = Template.bind({});
Default.args = {
  title: "Security Step",
  subTitle: "Could your please re-enter your current password before changing your account's data?",
};
export const InputButton = Template.bind({});
InputButton.args = {
  title: "Account Deletion",
  color: "red",
  subTitle: "Are your world like to delete your account? Please be careful since this action cannot be undone!",
  children: (
    <ButtonToolbar>
      <Input placeholder={ "Enter current password" }/>
      <Button>Submit</Button>
    </ButtonToolbar>
  ),
};
export const Buttons = Template.bind({});
Buttons.args = {
  title: "Account Deletion",
  color: "red",
  subTitle: "Are your world like to delete your account? Please be careful since this action cannot be undone!",
  children: (
    <ButtonToolbar>
      <Button>Delete Account</Button>
      <Button>Go Back</Button>
    </ButtonToolbar>
  ),
};

export const ButtonsRight = Template.bind({});
ButtonsRight.args = {
  title: "Account Deletion",
  color: "red",
  between: true,
  subTitle: "Are your world like to delete your account? Please be careful since this action cannot be undone!",
  children: (
    <ButtonToolbar>
      <Button>Delete Account</Button>
      <Button>Go Back</Button>
    </ButtonToolbar>
  ),
};
export const Links = Template.bind({});
Links.args = {
  title: "Upgrade to the Agency Plan",
  color: "var(--color-primary)",
  subTitle: "Power up your current plan with only 9.99 per month and receive tons of new features including but not" +
    " limited to:",
  children: (
    <div>
      <ul>
        <li>10GB storage</li>
        <li>1TB bandwith</li>
        <li>Exclusive 24/7 email, phone and chat support</li>
      </ul>
      <ButtonToolbar>
        <Button>Delete Account</Button>
        <Button>Go Back</Button>
      </ButtonToolbar>
    </div>
  ),
};
