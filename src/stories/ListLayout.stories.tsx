import React from "react";
import { AvatarUser, Badge, Button, CardList, Group, Title } from "../components";

export default {
  title: 'Layout/List/Default',
};

const Template = () => (
  <div>
    <CardList>
      <Group>
        <Title>Website</Title>
        <Badge label={ "Operational" } textColor={ "green" } transparent/>
      </Group>
      <Group>
        <Title>Desktop Application</Title>
        <Badge label={ "Operational" } textColor={ "green" } transparent/>
      </Group>
      <Group>
        <Title>Mobile Application</Title>
        <Badge label={ "Operational" } textColor={ "green" } transparent/>
      </Group>
      <Group>
        <Title>API</Title>
        <Badge label={ "Operational" } textColor={ "green" } transparent/>
      </Group>
      <Group>
        <Title>Documentacion</Title>
        <Badge label={ "Operational" } textColor={ "green" } transparent/>
      </Group>
    </CardList>
  </div>
);
export const Default = Template.bind({});
const TemplateBadge = () => (
  <div>
    <CardList>
      <Group>
        <Title>Home</Title>
        <Badge label={ "3" } radius backgroundColor={ "red" }/>
      </Group>
      <Group>
        <Title>Inbox</Title>
        <Badge label={ "8" } radius/>
      </Group>
      <Group>
        <Title>Projects</Title>
        <Badge label={ "8" } radius backgroundColor={ "yellow" } textColor={ "black" }/>
      </Group>
      <Group>
        <Title>Customers</Title>
        <Badge label={ "5" } radius/>
      </Group>
      <Group>
        <Title>Feedback</Title>
        <Badge label={ "6" } radius backgroundColor={ "green" }/>
      </Group>
    </CardList>
  </div>
);
export const Badges = TemplateBadge.bind({});
const TemplateAvatar = () => (
  <div>
    <CardList>
      <Group>
        <AvatarUser title={ "Thomas Reynols" } subTitle={ "Web Developer" }/>
        <i className={ "fa fa-chevron-right" }/>
      </Group>
      <Group>
        <AvatarUser title={ "Thomas Reynols" } subTitle={ "Web Developer" }/>
        <i className={ "fa fa-chevron-right" }/>
      </Group>
      <Group>
        <AvatarUser title={ "Thomas Reynols" } subTitle={ "Web Developer" }/>
        <i className={ "fa fa-chevron-right" }/>
      </Group>
      <Group>
        <AvatarUser title={ "Thomas Reynols" } subTitle={ "Web Developer" }/>
        <i className={ "fa fa-chevron-right" }/>
      </Group>
      <Group>
        <AvatarUser title={ "Thomas Reynols" } subTitle={ "Web Developer" }/>
        <i className={ "fa fa-chevron-right" }/>
      </Group>
    </CardList>
  </div>
);
export const Avatar = TemplateAvatar.bind({});

const TemplateActions = () => (
  <div>
    <CardList>
      <Group>
        <AvatarUser title={ "Thomas Reynols" } subTitle={ "Web Developer" }/>
        <Button>View</Button>
      </Group>
      <Group>
        <AvatarUser title={ "Thomas Reynols" } subTitle={ "Web Developer" }/>
        <Button>View</Button>
      </Group>
      <Group>
        <AvatarUser title={ "Thomas Reynols" } subTitle={ "Web Developer" }/>
        <Button>View</Button>
      </Group>
      <Group>
        <AvatarUser title={ "Thomas Reynols" } subTitle={ "Web Developer" }/>
        <Button>View</Button>
      </Group>
      <Group>
        <AvatarUser title={ "Thomas Reynols" } subTitle={ "Web Developer" }/>
        <Button>View</Button>
      </Group>
    </CardList>
  </div>
);
export const Actions = TemplateActions.bind({});
