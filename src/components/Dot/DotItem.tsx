import React from "react";
import { BEM } from "../../functions";
import { IDotItemProps } from "../../props/IDotProps";
import { Dot } from "./Dot";

export const DotItem = (props: IDotItemProps) => {
  const cx = new BEM("DotItem", {});

  cx.Append(props.className);
  return (
    <div className={ cx.toString() } style={ props.style }>
      <Dot theme={ props.theme }/>
      { props.title && <span className={ cx.Children("title") }>{ props.title }</span> }
      { props.children }
    </div>
  );
};
