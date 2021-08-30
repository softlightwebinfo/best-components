import React from "react";
import { BEM } from "../../functions";
import { ILabelProps } from "../../props/ILabelProps";

export const Label = (props: ILabelProps) => {
  const cx = new BEM("Label", {});
  cx.Append(props.className);
  return (
    <label className={ cx.toString() } style={ props.style }>{ props.children }</label>
  );
};
