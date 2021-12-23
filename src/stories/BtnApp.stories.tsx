import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Grid, GridItem } from "../components";
import { BtnApp } from "../components/BtnApp/BtnApp";

export default {
  title: 'Base/BtnApp/Default',
  component: BtnApp,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof BtnApp>;

const Template: ComponentStory<typeof BtnApp> = (args) => (
  <BtnApp { ...args } />
);

export const Default = Template.bind({});

Default.args = {
  icon: <i className="fa fa-home"/>,
  label: "Accounting",
};

const TemplateGrid: ComponentStory<typeof BtnApp> = (args) => (
  <Grid cols={ 2 } gap={20} style={ { maxWidth: 500, margin: "20px auto" } }>
    <GridItem>
      <BtnApp { ...args } />
    </GridItem>
    <GridItem>
      <BtnApp { ...args } />
    </GridItem>
    <GridItem>
      <BtnApp { ...args } />
    </GridItem>
    <GridItem>
      <BtnApp { ...args } />
    </GridItem>
    <GridItem>
      <BtnApp { ...args } />
    </GridItem>
    <GridItem>
      <BtnApp { ...args } />
    </GridItem>
    <GridItem>
      <BtnApp { ...args } />
    </GridItem>
    <GridItem>
      <BtnApp { ...args } />
    </GridItem>
  </Grid>
);

export const GridApps = TemplateGrid.bind({});
GridApps.args = {
  icon: <i className="fa fa-home"/>,
  label: "Accounting",
};
