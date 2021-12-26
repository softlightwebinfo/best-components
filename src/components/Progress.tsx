import React from "react";
import { BEM } from "../functions";
import { IProgressProps } from "../props/IProgressProps";

const Progress = (props: IProgressProps) => {
  const cx = new BEM("Progress", {});
  cx.Append(props.className);

  return (
    <div className={ cx.toString() } style={ props.style }>
      <div style={ { width: `${ props.value }%` } } className={ cx.Children("bar") }>{props.children}</div>
    </div>
  );
};

export default Progress;
