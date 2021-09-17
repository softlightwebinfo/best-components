import React from "react";
import { BEM } from "../../functions";
import { IButtonToolbarProps } from "../../props/IButtonToolbarProps";

export const ButtonToolbar = (props: IButtonToolbarProps) => {
  const cx = new BEM("ButtonToolbar", {});
  cx.Append(props.className);
  return (
    <div className={cx.toString()} style={ props.style }>
      { props.children }
    </div>
  );
};
