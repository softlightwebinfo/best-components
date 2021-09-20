import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { SubTitle, Title } from "../components";
import { PageHeading } from "../components/PageHeading/PageHeading";

export default {
  title: 'Base/PageHeading/Default',
  component: PageHeading,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof PageHeading>;

const Template: ComponentStory<typeof PageHeading> = (args) => <PageHeading { ...args } />;
export const Default = Template.bind({});
Default.args = {
  opacity: true,
  image: "https://www.teahub.io/photos/full/102-1021773_lobo-en-el-bosque-forest-with-a-wolf.jpg",
  children: (
    <>
      <Title>Fully Responsive UI Components</Title>
      <SubTitle>
        Carefully coded and tested. You can use them to build the UI of your web project without ever leaving
        your HTML.
      </SubTitle>
    </>
  ),
};
