import React from "react";
import { Checkbox, TitleSubtitle } from "../components";
import { CardList } from "../components/CardList/CardList";
import { Group } from "../components/Group/Group";

export default {
  title: 'Layout/FormSwitch/Default',
  argTypes: {},
};

const Template = () => (
  <form action="">
    <CardList>
      <Group>
        <TitleSubtitle title={ "Account Notifications" } subTitle={ "We will notify you about important changes" }/>
        <Checkbox type="switch"/>
      </Group>
      <Group>
        <TitleSubtitle title={ "Account Notifications" } subTitle={ "We will notify you about important changes" }/>
        <Checkbox type="switch"/>
      </Group>
      <Group>
        <TitleSubtitle title={ "Account Notifications" } subTitle={ "We will notify you about important changes" }/>
        <Checkbox type="switch"/>
      </Group>
      <Group>
        <TitleSubtitle title={ "Account Notifications" } subTitle={ "We will notify you about important changes" }/>
        <Checkbox type="switch"/>
      </Group>
      <Group>
        <TitleSubtitle title={ "Account Notifications" } subTitle={ "We will notify you about important changes" }/>
        <Checkbox type="switch"/>
      </Group>
      <Group>
        <TitleSubtitle title={ "Account Notifications" } subTitle={ "We will notify you about important changes" }/>
        <Checkbox type="switch"/>
      </Group>
    </CardList>
  </form>
);
const Template2 = () => (
  <form action="">
    <CardList noBorder>
      <Group>
        <TitleSubtitle title={ "Account Notifications" } subTitle={ "We will notify you about important changes" }/>
        <Checkbox type="switch"/>
      </Group>
      <Group>
        <TitleSubtitle title={ "Account Notifications" } subTitle={ "We will notify you about important changes" }/>
        <Checkbox type="switch"/>
      </Group>
      <Group>
        <TitleSubtitle title={ "Account Notifications" } subTitle={ "We will notify you about important changes" }/>
        <Checkbox type="switch"/>
      </Group>
      <Group>
        <TitleSubtitle title={ "Account Notifications" } subTitle={ "We will notify you about important changes" }/>
        <Checkbox type="switch"/>
      </Group>
      <Group>
        <TitleSubtitle title={ "Account Notifications" } subTitle={ "We will notify you about important changes" }/>
        <Checkbox type="switch"/>
      </Group>
      <Group>
        <TitleSubtitle title={ "Account Notifications" } subTitle={ "We will notify you about important changes" }/>
        <Checkbox type="switch"/>
      </Group>
    </CardList>
  </form>
);
const Template3 = () => (
  <form action="">
    <CardList noBorder noBorderItems>
      <Group>
        <TitleSubtitle title={ "Account Notifications" } subTitle={ "We will notify you about important changes" }/>
        <Checkbox type="switch"/>
      </Group>
      <Group>
        <TitleSubtitle title={ "Account Notifications" } subTitle={ "We will notify you about important changes" }/>
        <Checkbox type="switch"/>
      </Group>
      <Group>
        <TitleSubtitle title={ "Account Notifications" } subTitle={ "We will notify you about important changes" }/>
        <Checkbox type="switch"/>
      </Group>
      <Group>
        <TitleSubtitle title={ "Account Notifications" } subTitle={ "We will notify you about important changes" }/>
        <Checkbox type="switch"/>
      </Group>
      <Group>
        <TitleSubtitle title={ "Account Notifications" } subTitle={ "We will notify you about important changes" }/>
        <Checkbox type="switch"/>
      </Group>
      <Group>
        <TitleSubtitle title={ "Account Notifications" } subTitle={ "We will notify you about important changes" }/>
        <Checkbox type="switch"/>
      </Group>
    </CardList>
  </form>
);
export const Default = Template.bind({});
export const NoBorder = Template2.bind({});
export const NoBorderItems = Template3.bind({});
