import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AvatarUser } from "../components";
import { WrapperHeader } from "../components/WrapperHeader/WrapperHeader";

export default {
  title: 'Base/WrapperHeader/Default',
  component: WrapperHeader,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof WrapperHeader>;

const Template: ComponentStory<typeof WrapperHeader> = (args) => (
  <WrapperHeader { ...args }>
    <AvatarUser
      title={ "Robert" }
      subTitle={ "Administrator" }
    />
  </WrapperHeader>
);
export const Default = Template.bind({});
Default.args = {
  image: "https://images.theconversation.com/files/268394/original/file-20190409-2909-1964qt0.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
,
};
