import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Avatar, Button, ButtonToolbar, Container, Grid, GridItem, SubTitle, Title } from "../components";
import { Center } from "../components/Center/Center";
import { Section } from "../components/Section/Section";

export default {
  title: 'Base/Section/Default',
  component: Section,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args) => <Section { ...args } />;
export const Default = Template.bind({});
Default.args = {
  title: "Fully Responsive UI Components",
  subTitle: "Carefully coded and tested. You can use them to build the UI of your web project without ever leaving" +
    " your HTML.",
  children: (
    <Container style={ { maxWidth: 900 } }>
      <Grid cols={ 2 } gap={ 60 }>
        <GridItem>
          <ButtonToolbar>
            <Avatar size="xxl"/>
            <div>
              <Title className="mb-4">Framework Agnostic</Title>
              <SubTitle>
                Carefully coded and tested. You can use them to build the UI of your web project without ever leaving
                your
                HTML
              </SubTitle>
            </div>
          </ButtonToolbar>
        </GridItem>
        <GridItem>
          <ButtonToolbar>
            <Avatar size="xxl"/>
            <div>
              <Title className="mb-4">Framework Agnostic</Title>
              <SubTitle>
                Carefully coded and tested. You can use them to build the UI of your web project without ever leaving
                your
                HTML
              </SubTitle>
            </div>
          </ButtonToolbar>
        </GridItem>
        <GridItem>
          <ButtonToolbar>
            <Avatar size="xxl"/>
            <div>
              <Title className="mb-4">Framework Agnostic</Title>
              <SubTitle>
                Carefully coded and tested. You can use them to build the UI of your web project without ever leaving
                your
                HTML
              </SubTitle>
            </div>
          </ButtonToolbar>
        </GridItem>
        <GridItem>
          <ButtonToolbar>
            <Avatar size="xxl"/>
            <div>
              <Title className="mb-4">Framework Agnostic</Title>
              <SubTitle>
                Carefully coded and tested. You can use them to build the UI of your web project without ever leaving
                your
                HTML
              </SubTitle>
            </div>
          </ButtonToolbar>
        </GridItem>
      </Grid>
      <Center style={ { margin: 80 } }>
        <Button size={ "lg" }>Live Preview</Button>
      </Center>
    </Container>
  ),
};
