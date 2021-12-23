import React from "react";
import { BEM } from "../../functions";
import { IToolbarProps } from "../../props/IToolbarProps";

export const Toolbar = (props: IToolbarProps) => {
  const cx = new BEM("Toolbar", {});
  cx.Append(props.className);

  return (
    <div className={ cx.toString() } style={ props.style }>
      { props.children }
    </div>
  );
};
