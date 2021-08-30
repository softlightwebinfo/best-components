import React from "react";
import { BEM } from "../../functions";
import { IDividerProps } from "../../props";

export const Divider = (props: IDividerProps) => {
  const cx = new BEM("Divider", {});
  return (
    <div className={ cx.toString() } style={ props.style }>{ props.children }</div>
  );
};
