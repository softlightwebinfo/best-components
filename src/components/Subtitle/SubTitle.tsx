import React from "react";
import { BEM } from "../../functions";
import { ISubTitleProps } from "../../props/ISubTitleProps";

export const SubTitle = (props: ISubTitleProps) => {
  const cx = new BEM("SubTitle", {});
  cx.Append(props.className);
  return (
    <div className={ cx.toString() } style={ props.style }>{ props.children }</div>
  );
};
