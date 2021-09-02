import React from "react";
import { BEM } from "../../functions";
import { IGroupProps } from "../../props";

export const Group = (props: IGroupProps) => {
  const cx = new BEM("Group", {
    default: props.default,
    column: props.column,
  });
  cx.Append(props.className);
  return (
    <div className={ cx.toString() } style={ props.style }>
      { props.children }
    </div>
  );
};
