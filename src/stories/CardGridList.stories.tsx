import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Container } from "../components";
import { CardGridList } from "../components/CardGridList/CardGridList";

export default {
  title: 'Base/Grid/GridList',
  component: CardGridList,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof CardGridList>;

const Template: ComponentStory<typeof CardGridList> = (args) => (
  <Container style={ { marginTop: 20 } }>
    <CardGridList{ ...args }/>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      title: "Do i get Access to the community?",
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      title: "Do i get Access ?",
      message: "Lorem Ipsum is simply dummy ",
    },
    {
      title: "Do i get Access to the community?"
    ,
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  text of the printing and typesetting industry. "
    ,
    },
    {
      title: "Do i get Access to the community? the community?",
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      title: "Do i get Access to the community?"
    ,
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  of the printing and typesetting industry. "
    ,
    },
    {
      title: "Do i get Access to the community?Access to the community?"
    ,
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    ,
    },
    {
      title: "Do i get Access Do i get Access to the community?"
    ,
      message: "Lorem Ipsum is simply dummy text of the printingLorem Ipsum is simply dummy text of the printingLorem Ipsum is simply dummy text of the printing and typesetting industry. "
    ,
    },
    {
      title: "Do i get Access to the community?Access to the community?Access to the community?community?"
    ,
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    ,
    },
    {
      title: "Do i get Access to the community?the community?",
      message: "Lorem Ipsum is simplLorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      title: "Do i get Access to the com Access to the community?"
    ,
      message: "Lorem Ipsum is simply dummy text of the printing rem Ipsum is simply dummy text of the printing and typesetting industry. "
    ,
    },
    {
      title: "Do i get Access to the community?",
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      title: "Do i get Access to the communityo i get Access to the community?"
    ,
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.psum is simply dummy text of the printing and typesetting industry. "
    ,
    },
    {
      title: "Do i get Access to the community?",
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
      title: "Do i get Access?",
      message: "Lorem Ipsum is typesetting industry. ",
    },
    {
      title: "Do i get Access to the communityget Access to the community?"
    ,
      message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    ,
    },
    {
      title: "Do i ?"
    ,
      message: "Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    ,
    },
  ],
};
