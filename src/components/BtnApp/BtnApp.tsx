import React from "react";
import { BEM } from "../../functions/BEM";
import { IBtnAppProps } from "../../props/IBtnAppProps";

export const BtnApp = (props: IBtnAppProps) => {
  const cx = new BEM("BtnApp", {});
  cx.Append(props.className);
  return (
    <div className={ cx.toString() } style={ props.style }>
      <span>{ props.icon }</span>
      <div>{ props.label }</div>
    </div>
  );
};
