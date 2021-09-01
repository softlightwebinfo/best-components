import React from "react";
import { BEM } from "../../functions";
import { IInputGroupButtonProps } from "../../props/IInputGroupButtonProps";

export const InputGroupButton = (props: IInputGroupButtonProps) => {
  const cx = new BEM("InputGroupButton", {});
  cx.Append(props.className);
  return (
    <div className={ cx.toString() } style={ props.style }>
      { props.children }
    </div>
  );
};
