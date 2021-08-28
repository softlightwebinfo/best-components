import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button, ButtonToolbar } from "../components";
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
export const Default = Template.bind({});
Default.args = {};
export const Actions = Template2.bind({});
Actions.args = {};
