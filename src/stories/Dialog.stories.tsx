import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import { Avatar, Button, ButtonToolbar, FormGroup, Group, Input, SubTitle, Title, TitleSubtitle } from "../components";
import { Dialog } from "../components/Dialog/Dialog";

export default {
  title: 'Base/Dialog/Default',
  component: Dialog,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => {
  const [open, setOpen] = useState(true);
  return (
    <Dialog
      { ...args }
      open={ open }
      onCLickOutSide={ () => setOpen(false) }
      header={ "Modal Title" }
      footer={ (
        <ButtonToolbar>
          <Button default>Cancel</Button>
          <Button>Submit</Button>
        </ButtonToolbar>
      ) }
    >
      Content...
    </Dialog>
  );
};
const Template1: ComponentStory<typeof Dialog> = (args) => {
  const [open, setOpen] = useState(true);
  return (
    <Dialog
      { ...args }
      open={ open }
      onCLickOutSide={ () => setOpen(false) }
      header={ <Title><i className={ "fa fa-user-plus" }/> Invite Peope</Title> }
      footer={ (
        <ButtonToolbar>
          <Button default>Cancel</Button>
          <Button>Submit</Button>
        </ButtonToolbar>
      ) }
    >
      <FormGroup>
        <SubTitle>Invite a friend or a colleague to your app and add them in your current project</SubTitle>
      </FormGroup>
      <form>
        <Input placeholder={ "user@example.com" }/>
      </form>
    </Dialog>
  );
};
const Template2: ComponentStory<typeof Dialog> = (args) => {
  const [open, setOpen] = useState(true);
  const style: any = {
    "--avatar-size": "80px",
    fontSize: 30,
  };
  return (
    <Dialog
      { ...args }
      open={ open }
      onCLickOutSide={ () => setOpen(false) }
      footer={ (
        <ButtonToolbar>
          <Button default>Cancel</Button>
          <Button>Yes, delete file</Button>
        </ButtonToolbar>
      ) }
    >
      <Group default style={ { alignItems: "center" } }>
        <Avatar style={ style } size={ "lg" }>
          <i className={ "fa fa-file" }/>
        </Avatar>
        <TitleSubtitle
          title={ "File Deletion" }
          subTitle={ "Are you sure you want to completely remove Research.docx from your drive?" }
        />
      </Group>
    </Dialog>
  );
};
const Template3: ComponentStory<typeof Dialog> = (args) => {
  const [open, setOpen] = useState(true);
  const style: any = {
    "--avatar-size": "80px",
    fontSize: 30,
  };
  return (
    <Dialog
      { ...args }
      open={ open }
      onCLickOutSide={ () => setOpen(false) }
    >
      <Group default column>
        <Avatar style={ style } size={ "lg" }>
          <i className={ "fa fa-file" }/>
        </Avatar>
        <TitleSubtitle
          title={ "File Deletion" }
          subTitle={ "Are you sure you want to completely remove Research.docx from your drive?" }
        />
      </Group>
      <Button style={ { marginTop: 20 } } size={"lg"} block primary>Let's get started</Button>
    </Dialog>
  );
};
export const Default = Template.bind({});
Default.args = {};
export const WithForm = Template1.bind({});
WithForm.args = {};
export const Confirmation = Template2.bind({});
Confirmation.args = {};
export const Notification = Template3.bind({});
Notification.args = {};
