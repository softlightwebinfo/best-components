import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Card, CardBody, SubTitle, Title } from "../components";
import { Page } from "../components/Page/Page";

export default {
  title: 'Base/Page/Default',
  component: Page,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => (
  <Page { ...args } />
);

export const Default = Template.bind({});
Default.args = {
  center: true,
  children: (
    <Card style={ { width: 400 } }>
      <CardBody>
        Hola mundo
      </CardBody>
    </Card>
  ),
};
export const Content = Template.bind({});
Content.args = {
  reverse: true,
  left: (
    <div style={ { padding: 40 } }>
      <Title>Titulo</Title>
      <SubTitle>Subtitle</SubTitle>
    </div>
  ),
  right: (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
      alt=""
      style={ {
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
      } }
    />
  ),
};
