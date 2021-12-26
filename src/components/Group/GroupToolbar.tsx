import React from "react";
import { BEM } from "../../functions";
import { IGroupToolbarProps } from "../../props/IGroupToolbarProps";

export const GroupToolbar = (props: IGroupToolbarProps) => {
  const cx = new BEM("GroupToolbar", {});
  cx.Append(props.className);
  return (
    <div className={ cx.toString() } style={ props.style }>{ props.children }</div>
  );
};
