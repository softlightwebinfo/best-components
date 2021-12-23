import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import { Badge, DrawerContent, DrawerHeader, Grid, GridItem } from "../components";
import { BtnApp } from "../components/BtnApp/BtnApp";
import { Button } from "../components/Button";
import { Drawer } from "../components/Drawer/Drawer";

export default {
  title: 'Base/Drawer/BtnApp',
  component: Drawer,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => {
  const [open, setOpen] = useState(true);
  const data = [
    { label: "Accouting", icon: <i className="fa fa-home"/> },
    { label: "Accouting", icon: <i className="fa fa-home"/> },
    { label: "Accouting", icon: <i className="fa fa-home"/> },
    { label: "Accouting", icon: <i className="fa fa-home"/> },
    { label: "Accouting", icon: <i className="fa fa-home"/> },
    { label: "Accouting", icon: <i className="fa fa-home"/> },
    { label: "Accouting", icon: <i className="fa fa-home"/> },
    { label: "Accouting", icon: <i className="fa fa-home"/> },
    { label: "Accouting", icon: <i className="fa fa-home"/> },
    { label: "Accouting", icon: <i className="fa fa-home"/> },
  ];
  return (
    <div>
      <Button onClick={ () => setOpen(true) }>Click</Button>
      <Drawer { ...args } open={ open } onClose={ () => setOpen(false) }>
        <DrawerHeader
          transparent
          title={ (
            <div>
              <div>Quick Actions</div>
              <Badge style={ { marginTop: 10 } } label={ "23 tasks pending" }/>
            </div>
          ) }
        />
        <DrawerContent>
          <Grid cols={ 2 } gap={ 20 }>
            { data.map((item, index) => (
              <GridItem key={ index }>
                <BtnApp { ...item }/>
              </GridItem>
            )) }
          </Grid>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
export const Default = Template.bind({});
Default.args = {};
