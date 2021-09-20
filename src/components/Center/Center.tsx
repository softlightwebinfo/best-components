import React from "react";
import { BEM } from "../../functions";
import { ICenterProps } from "../../props/ICenterProps";

export const Center = (props: ICenterProps) => {
  const cx = new BEM("Center", {});
  cx.Append(props.className);
  return (
    <div className={ cx.toString() } style={ props.style }>
      { props.children }
    </div>
  );
};
