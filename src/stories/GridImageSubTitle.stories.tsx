import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Container } from "../components";
import { GridImageSubTitle } from "../components/GridImageSubTitle/GridImageSubTitle";

export default {
  title: 'Layout/GridImageSubTitle/default',
  component: GridImageSubTitle,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof GridImageSubTitle>;

const Template: ComponentStory<typeof GridImageSubTitle> = (args) => (
  <Container style={ { padding: 80 } }>
    <GridImageSubTitle{ ...args }/>
  </Container>
);
export const Default = Template.bind({});
Default.args = {
  imageLeft: "https://compass-ssl.microsoft.com/assets/f9/4c/f94c2916-6a4e-4cbc-9bc1-9f0e0f4ee46c.png",
  imageRight: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg",
  items: [
    {
      icon: <i className={ "fa fa-user" }/>,
      title: "Pasion",
      description: "Nos apasiona lo que hacemos y nos encanta crear productos que puedan hacer tu vida más fácil",
    },
    {
      icon: <i className={ "fa fa-user" }/>,
      title: "Pasion",
      description: "Nos apasiona lo que hacemos y nos encanta crear productos que puedan hacer tu vida más fácil",
    },
    {
      icon: <i className={ "fa fa-user" }/>,
      title: "Pasion",
      description: "Nos apasiona lo que hacemos y nos encanta crear productos que puedan hacer tu vida más fácil",
    },
  ],
  button: {
    children: "Live Preview",
  },
};
