import React from "react";
import { BEM } from "../../functions";
import { IFormGroupProps } from "../../props/IFormGroupProps";

export const FormGroup = (props: IFormGroupProps) => {
  const cx = new BEM("FormGroup", {});
  cx.Append(props.className);
  return (
    <div className={ cx.toString() } style={ props.style }>
      <span className={ cx.Children("text") }>{ props.label }</span>
      { props.children }
    </div>
  );
};
