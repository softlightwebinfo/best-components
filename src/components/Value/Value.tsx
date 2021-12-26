import React from "react";
import { BEM } from "../../functions";
import { IValueProps } from "../../props/IValueProps";

export const Value = (props: IValueProps) => {
  const cx = new BEM("Value", {});
  cx.Append(props.className);

  return (
    <span className={ cx.toString() } style={ props.style }>
      { props.children }
    </span>
  );
};
