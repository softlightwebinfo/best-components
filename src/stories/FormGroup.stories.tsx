import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Card } from "../components/Card/Card";
import { CardBody } from "../components/Card/CardBody";
import { CardFooter } from "../components/Card/CardFooter";
import { CardHeader } from "../components/Card/CardHeader";

export default {
  title: 'Base/Card/Grid',
  component: Card,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <div style={ { display: 'flex', gap: 40 } }>
    <Card { ...args } >
      <CardHeader>
        <h3>Card Title</h3>
      </CardHeader>
      <CardBody>
        <p>This is an example card with a header, main content and a footer.</p>
      </CardBody>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
    <Card { ...args } >
      <CardHeader>
        <h3>Card Title</h3>
      </CardHeader>
      <CardBody>
        <p>This is an example card with a header, main content and a footer.</p>
      </CardBody>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
    <Card { ...args } >
      <CardHeader>
        <h3>Card Title</h3>
      </CardHeader>
      <CardBody>
        <p>This is an example card with a header, main content and a footer.</p>
      </CardBody>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  </div>
);
export const Default = Template.bind({});
Default.args = {};
