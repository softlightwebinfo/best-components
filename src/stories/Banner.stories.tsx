import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button, ButtonToolbar } from "../components";
import { Banner } from "../components/Banner/Banner";

export default {
  title: 'Base/Banner/Default',
  component: Banner,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => <Banner { ...args } />;
export const Default = Template.bind({});
Default.args = {
  message: "We just released 2.0 version! Check out the changelog.",
};
export const Placement = Template.bind({});
Placement.args = {
  message: "We just released 2.0 version! Check out the changelog.",
  bannerType: "bubble",
  placement: "right-bottom",
};
export const Cookie = Template.bind({});
Cookie.args = {
  message: "This website uses cookies to personalise content and ads, to provide social media features and to" +
    " analyse our traffic.",
  title: "We use cookies",
  placement: "bottom",
  bannerType: "floating",
  right: (
    <ButtonToolbar>
      <Button>Manage</Button>
      <Button>Accept</Button>
    </ButtonToolbar>
  ),
};
