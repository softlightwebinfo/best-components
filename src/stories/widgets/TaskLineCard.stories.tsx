import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Dropdown, DropdownItem, GridDefault } from "../../components";
import { StatWidget } from "../../widget/StatWidget/StatWidget";
import { TeamProjectWidget } from "../../widget/TeamProjectWidget/TeamProjectWidget";

export default {
  title: 'Widget/TeamProject/Default',
  component: StatWidget,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof StatWidget>;

const Template: ComponentStory<typeof TeamProjectWidget> = (args) => <TeamProjectWidget { ...args } />;
export const Default = Template.bind({});
Default.args = {
  title: "New Website",
  progress: 25,
  team: [
    { name: "Rafa Gonzalez", size: "md" },
    { name: "Pedro Perez", size: "md" },
    { name: "Maria Gutierrez", size: "md" },
    { name: "Esperanza Libertad", size: "md" },
  ],
  numberTotal: 10,
  number: 3,
  date: "2020-01-14",
};
const TemplateBase: ComponentStory<typeof TeamProjectWidget> = (args) => (
  <GridDefault col={ 2 } margin>
    { [...new Array(20)].map((item, index) => (
      <TeamProjectWidget
        key={ index }
        { ...args }
        titleRight={ (
          <Dropdown
            placement={"bottom-left"} trigger={ <i className={ "fa fa-ellipsis-v" }/> }>
            <DropdownItem>Edit</DropdownItem>
            <DropdownItem>Share</DropdownItem>
          </Dropdown>
        ) }
      />
    )) }
  </GridDefault>
);
export const GridBase = TemplateBase.bind({});
GridBase.args = {
  title: "New Website",
  progress: 25,
  team: [
    { name: "Rafa Gonzalez", size: "md" },
    { name: "Pedro Perez", size: "md" },
    { name: "Maria Gutierrez", size: "md" },
    { name: "Esperanza Libertad", size: "md" },
  ],
  numberTotal: 10,
  number: 3,
  date: "2020-01-14",
};
