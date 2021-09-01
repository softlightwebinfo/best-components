import React from "react";
import { BEM } from "../../functions";
import { IGroupProps } from "../../props/IGroupProps";

export const Group = (props: IGroupProps) => {
  const cx = new BEM("Group", {});
  cx.Append(props.className);
  return (
    <div className={ cx.toString() } style={ props.style }>
      { props.children }
    </div>
  );
};
