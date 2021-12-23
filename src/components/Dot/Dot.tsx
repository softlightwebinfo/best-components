import React from "react";
import { BEM } from "../../functions";
import { IDotProps } from "../../props/IDotProps";

export const Dot = (props: IDotProps) => {
  const cx = new BEM("Dot", {
    [props.theme ?? ""]: !!props.theme,
  });
  cx.Append(props.className);

  return (
    <span className={ cx.toString() } style={ props.style }/>
  );
};
