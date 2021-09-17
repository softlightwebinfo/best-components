import React from "react";
import { BEM } from "../../functions";
import { IFormGroupProps } from "../../props/IFormGroupProps";
import { Label } from "../Label/Label";

export const FormGroup = (props: IFormGroupProps) => {
  const cx = new BEM("FormGroup", {});
  cx.Append(props.className);
  return (
    <Label className={ cx.toString() } style={ props.style }>
      <span className={cx.Children("text")}>{ props.label }</span>
      { props.children }
    </Label>
  );
};
