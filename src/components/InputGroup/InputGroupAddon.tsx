import React from "react";
import { BEM } from "../../functions";
import { IInputGroupAddonProps } from "../../props/IInputGroupAddonProps";

export const InputGroupAddon = (props: IInputGroupAddonProps) => {
  const cx = new BEM("InputGroupAddon", {});
  cx.Append(props.className);
  return (
    <div className={ cx.toString() } style={ props.style }>
      { props.children }
    </div>
  );
};
