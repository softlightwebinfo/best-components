import React from "react";
import { BEM } from "../../functions";
import { IInputGroupProps } from "../../props/IInputGroupProps";

export const InputGroup = (props: IInputGroupProps) => {
  const cx = new BEM("InputGroup", {});
  cx.Append(props.className);
  return (
    <div className={ cx.toString() } style={ props.style }>
      { props.children }
    </div>
  );
};
