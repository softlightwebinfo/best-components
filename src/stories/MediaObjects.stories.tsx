import React from "react";
import { Avatar, Button, ButtonToolbar, Card, CardBody, Group } from "../components";

export default {
  title: 'Layout/MediaObjects/Default',
};

const Template = () => (
  <div>
    <Card style={ { width: 500 } }>
      <CardBody>
        <Group default>
          <Avatar name={ "Lori Grant" } size={ "lg" }/>
          <div>
            <b>Lori Grant</b> I just started a new Tailwind CSS based project and I find it very refreshing. Could you
            suggest any tools to help me out?
            <ButtonToolbar>
              <Button default>Like</Button>
              <Button default>Reply</Button>
            </ButtonToolbar>
          </div>
        </Group>
      </CardBody>
    </Card>
  </div>
);
export const Default = Template.bind({});

