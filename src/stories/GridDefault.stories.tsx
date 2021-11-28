import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Card } from "../components";
import { GridDefault } from "../components/Grid/GridDefault";
import { GridDefaultItem } from "../components/Grid/GridDefaultItem";

export default {
  title: 'Base/GridDefault/Default',
  component: GridDefault,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof GridDefault>;

const Template: ComponentStory<typeof GridDefault> = (args) => (
  <GridDefault { ...args } >
    <GridDefaultItem lg={5} xl={10}><Card style={ { backgroundColor: "whitesmoke" } }>Hola</Card></GridDefaultItem>
    <GridDefaultItem><Card style={ { backgroundColor: "whitesmoke" } }>Adios</Card></GridDefaultItem>
    <GridDefaultItem><Card style={ { backgroundColor: "whitesmoke" } }>PEPE</Card></GridDefaultItem>
    <GridDefaultItem><Card style={ { backgroundColor: "whitesmoke" } }>Hola</Card></GridDefaultItem>
    <GridDefaultItem><Card style={ { backgroundColor: "whitesmoke" } }>Adios</Card></GridDefaultItem>
    <GridDefaultItem><Card style={ { backgroundColor: "whitesmoke" } }>PEPE</Card></GridDefaultItem>
    <GridDefaultItem><Card style={ { backgroundColor: "whitesmoke" } }>Hola</Card></GridDefaultItem>
    <GridDefaultItem><Card style={ { backgroundColor: "whitesmoke" } }>Adios</Card></GridDefaultItem>
    <GridDefaultItem><Card style={ { backgroundColor: "whitesmoke" } }>PEPE</Card></GridDefaultItem>
    <GridDefaultItem><Card style={ { backgroundColor: "whitesmoke" } }>Hola</Card></GridDefaultItem>
    <GridDefaultItem><Card style={ { backgroundColor: "whitesmoke" } }>Adios</Card></GridDefaultItem>
    <GridDefaultItem><Card style={ { backgroundColor: "whitesmoke" } }>PEPE</Card></GridDefaultItem>
    <GridDefaultItem><Card style={ { backgroundColor: "whitesmoke" } }>Hola</Card></GridDefaultItem>
    <GridDefaultItem><Card style={ { backgroundColor: "whitesmoke" } }>Adios</Card></GridDefaultItem>
    <GridDefaultItem><Card style={ { backgroundColor: "whitesmoke" } }>PEPE</Card></GridDefaultItem>
  </GridDefault>
);
export const Default = Template.bind({});
Default.args = {};
