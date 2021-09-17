import React from "react";
import { BEM } from "../../functions";
import { IHeadingProps } from "../../props/IHeadingProps";

export const Heading = (props: IHeadingProps) => {
  const cx = new BEM("Heading", {});
  cx.Append(props.className);
  return (
    <div className={ cx.toString() } style={ props.style }>
      { props.children }
    </div>
  );
};
