import React from "react";
import { BEM } from "../../functions";
import { ITitleProps } from "../../props/ITitleProps";

export const Title = (props: ITitleProps) => {
  const cx = new BEM("Title", {});
  cx.Append(props.className);
  return (
    <h3 className={ cx.toString() } style={ props.style }>{ props.children }</h3>
  );
};
