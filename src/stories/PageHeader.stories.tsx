import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button, ButtonToolbar, Card, CardBody } from "../components";
import { Descriptions } from "../components/Descriptions/Descriptions";
import { DescriptionsItem } from "../components/Descriptions/DescriptionsItem";
import { PageHeader } from "../components/PageHeader/PageHeader";

export default {
  title: 'Base/PageHeader/Default',
  component: PageHeader,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof PageHeader>;

const Template: ComponentStory<typeof PageHeader> = (args) => (
  <Card>
    <CardBody>
      <PageHeader { ...args } />
    </CardBody>
  </Card>
);
export const Default = Template.bind({});
Default.args = {
  onBack: console.log,
  title: "Title",
  subTitle: "This is a subtitle",
};
export const Extra = Template.bind({});
Extra.args = {
  onBack: console.log,
  title: "Title",
  subTitle: "This is a subtitle",
  extra: (
    <ButtonToolbar>
      <Button>Operation</Button>
      <Button>Operation</Button>
      <Button primary>Primary</Button>
    </ButtonToolbar>
  ),
};
export const Children = Template.bind({});
Children.args = {
  onBack: console.log,
  title: "Title",
  subTitle: "This is a subtitle",
  extra: (
    <ButtonToolbar>
      <Button>Operation</Button>
      <Button>Operation</Button>
      <Button primary>Primary</Button>
    </ButtonToolbar>
  ),
  children: (
    <Descriptions size="sm" column={3}>
      <DescriptionsItem label="Created">Lili Qu</DescriptionsItem>
      <DescriptionsItem label="Association">
        <a>421421</a>
      </DescriptionsItem>
      <DescriptionsItem label="Creation Time">2017-01-10</DescriptionsItem>
      <DescriptionsItem label="Effective Time">2017-10-10</DescriptionsItem>
      <DescriptionsItem label="Remarks">
        Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
      </DescriptionsItem>
    </Descriptions>
  ),
};
