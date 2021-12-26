import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { AvatarUser, CardList, SubTitle } from "../components";
import { Group } from "../components/Group";
import { GroupToolbar } from "../components/Group/GroupToolbar";
import { MeetingNote } from "../components/Note/MeetingNote";

export default {
  title: 'Base/Note/Meeting',
  component: MeetingNote,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof MeetingNote>;

const Template: ComponentStory<typeof MeetingNote> = (args) => (
  <MeetingNote { ...args }>
    <Group style={ { marginBottom: 20 } }>
      <AvatarUser size={ "sm" } title={ "First meeting notes" }/>
      <GroupToolbar>
        <SubTitle>Just now</SubTitle>
        <i className={ "fa fa-ellipsis-v" }/>
      </GroupToolbar>
    </Group>
    <SubTitle>Here's a quick rundown of companies the client expressed interest in on our call this morning:</SubTitle>
    <ul>
      <li>Commonwealth Bank of Australia for the bright, positive color scheme</li>
      <li>Bupa Health Insurance for the adaptability of their logo around the site's layout</li>
      <li>OPSM again for the color scheme, this time for the softer pallette</li>
    </ul>
  </MeetingNote>
);
export const Default = Template.bind({});
Default.args = {};

const Template2: ComponentStory<typeof MeetingNote> = (args) => (
  <CardList noBorder noBorderItems style={ { margin: 20, padding: 20, backgroundColor: "whitesmoke" } }>
    { [...new Array(10)].map((_, index) => (
      <MeetingNote { ...args } key={ index }>
        <Group style={ { marginBottom: 20 } }>
          <AvatarUser size={ "sm" } title={ "First meeting notes" }/>
          <GroupToolbar>
            <SubTitle>Just now</SubTitle>
            <i className={ "fa fa-ellipsis-v" }/>
          </GroupToolbar>
        </Group>
        <SubTitle>Here's a quick rundown of companies the client expressed interest in on our call this
          morning:</SubTitle>
        <ul>
          <li>Commonwealth Bank of Australia for the bright, positive color scheme</li>
          <li>Bupa Health Insurance for the adaptability of their logo around the site's layout</li>
          <li>OPSM again for the color scheme, this time for the softer pallette</li>
        </ul>
      </MeetingNote>
    )) }
  </CardList>
);
export const DefaultList = Template2.bind({});
DefaultList.args = {};
