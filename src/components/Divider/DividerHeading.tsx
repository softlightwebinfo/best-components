import React from "react";
import { BEM } from "../../functions";
import { IDividerHeadingProps } from "../../props/IDividerHeadingProps";

export const DividerHeading = (props: IDividerHeadingProps) => {
  const cx = new BEM("DividerHeading", {});
  cx.Append(props.className);
  return (
    <h3 className={ cx.toString() } style={ props.style }>
      <span/>
      <span className={ cx.Children("title") }>{ props.children }</span>
      <span/>
    </h3>
  );
};
