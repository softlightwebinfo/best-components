import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AvatarUser, Card as Card2, CardBody } from "../components";

export default {
  title: 'Base/AvatarUser/Default',
  component: AvatarUser,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof AvatarUser>;

const Template: ComponentStory<typeof AvatarUser> = (args) => <AvatarUser { ...args } />;
const Template2: ComponentStory<typeof AvatarUser> = (args) => (
  <Card2>
    <CardBody>
      <AvatarUser { ...args } />
    </CardBody>
  </Card2>
);
export const Default = Template.bind({});
Default.args = {
  title: "John Doe",
  subTitle: "john.doe@gmail.com",
  image: "https://img.freepik.com/vector-gratis/avatar-personaje-empresario-aislado_24877-60111.jpg?size=338&ext=jpg",
};
export const Card = Template2.bind({});
Card.args = {
  title: "John Doe",
  subTitle: "john.doe@gmail.com",
  image: "https://img.freepik.com/vector-gratis/avatar-personaje-empresario-aislado_24877-60111.jpg?size=338&ext=jpg",
};
