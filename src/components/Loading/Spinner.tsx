import React from "react";
import { BEM } from "../../functions";
import { ISpinnerProps } from "../../props/ISpinnerProps";

export const Spinner = (props: ISpinnerProps) => {
  const cx = new BEM("Spinner", {});
  cx.Append(props.className);

  return (
    <div className={ cx.toString() } style={ props.style }/>
  );
};
