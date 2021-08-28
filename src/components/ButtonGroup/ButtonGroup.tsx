import React from "react";
import { BEM } from "../../functions";
import { IButtonGroupProps } from "../../props/IButtonGroupProps";

export const ButtonGroup = (props: IButtonGroupProps) => {
  const cx = new BEM("ButtonGroup", {});
  cx.Append(props.className);
  return (
    <div className={ cx.toString() } style={ props.style }>
      { props.children }
    </div>
  );
};
