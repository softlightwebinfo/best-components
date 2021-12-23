import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button, ButtonToolbar, CardMessage } from "../components";
import { Card } from "../components/Card/Card";
import { CardBody } from "../components/Card/CardBody";
import { CardFooter } from "../components/Card/CardFooter";
import { CardHeader } from "../components/Card/CardHeader";
import { CardTitle } from "../components/Card/CardTitle";

export default {
  title: 'Base/Card/Default',
  component: Card,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
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
);
const Template2: ComponentStory<typeof Card> = (args) => (
  <Card { ...args } style={ { margin: "auto", width: 400 } }>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <ButtonToolbar>
        <Button icon={ <i className={ "fa fa-sync" }/> }/>
        <Button icon={ <i className={ "fa fa-cog" }/> }/>
      </ButtonToolbar>
    </CardHeader>
    <CardBody>
      <p>This is an example card with a header, main content and a footer.</p>
    </CardBody>
    <CardFooter>
      <p>Card Footer</p>
    </CardFooter>
  </Card>
);
const CardTemplate: ComponentStory<typeof Card> = (args) => (
  <Card { ...args }>
    <CardHeader>
      <CardTitle>Project Manager</CardTitle>
    </CardHeader>
    <CardBody flex gap={ "var(--space-sm)" }>
      <CardMessage
        title={ "1. Example Project" }
        subTitle={ "Laravel App - Last updated 2 days ago" }
        style={ { backgroundColor: "whitesmoke" } }
        between
        noBorder
      >
        <Button size={ "md" }>Edit</Button>
      </CardMessage>
      <CardMessage
        title={ "1. Example Project" }
        subTitle={ "Laravel App - Last updated 2 days ago" }
        style={ { backgroundColor: "whitesmoke" } }
        between
        noBorder
      >
        <Button size={ "md" }>Edit</Button>
      </CardMessage>
      <CardMessage
        title={ "1. Example Project" }
        subTitle={ "Laravel App - Last updated 2 days ago" }
        style={ { backgroundColor: "whitesmoke" } }
        between
        noBorder
      >
        <Button size={ "md" }>Edit</Button>
      </CardMessage>
    </CardBody>
  </Card>
);
export const Default = Template.bind({});
Default.args = {};
export const Actions = Template2.bind({});
Actions.args = {};
export const CardManager = CardTemplate.bind({});
CardManager.args = {};
