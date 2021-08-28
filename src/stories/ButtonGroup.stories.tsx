import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "../components";
import { ButtonGroup } from "../components/ButtonGroup/ButtonGroup";

export default {
  title: 'Base/ButtonGroup/Default',
  component: ButtonGroup,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup { ...args } >
    <Button>Left</Button>
    <Button>Middle</Button>
    <Button>Right</Button>
  </ButtonGroup>
);
export const Default = Template.bind({});
Default.args = {};
