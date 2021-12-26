import React from "react";
import { BEM } from "../../functions";
import { IMeetingNoteProps } from "../../props/IMeetingNoteProps";
import { Card, CardBody } from "../Card";

export const MeetingNote = (props: IMeetingNoteProps) => {
  const cx = new BEM("MeetingNote", {});
  cx.Append(props.className);

  return (
    <Card className={ cx.toString() } style={ props.style }>
      <CardBody>
        { props.children }
      </CardBody>
    </Card>
  );
};
