import React from "react";
import { BEM } from "../../functions";
import { IScrollProps } from "../../props/IScrollProps";

export const Scroll = (props: IScrollProps) => {
  const cx = new BEM("Scroll", {});
  cx.Append(props.className);
  return (
    <div className={ cx.toString() } style={ props.style }>
      <div className={ cx.Children("content") }>{ props.children }</div>
    </div>
  );
};
