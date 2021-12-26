import React from "react";
import { BEM } from "../../functions";
import { Widget } from "../Widget";

export const TaskLineCard = (props: ITaskLineCardProps) => {
  const cx = new BEM("TaskLineCard", {});
  cx.Append(props.className);

  return (
    <Widget className={ cx.toString() } style={ props.style }>

    </Widget>
  );
};
