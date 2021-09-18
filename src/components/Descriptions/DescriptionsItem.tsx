import React from "react";
import { BEM } from "../../functions";
import { IDescriptionsItemProps } from "../../props/IDescriptionsItemProps";

export const DescriptionsItem = ({ position = "horizontal", ...props }: IDescriptionsItemProps) => {
  const cx = new BEM("DescriptionsItem", {
    [position]: !!position,
  });
  cx.Append(props.className);

  return (
    <div className={ cx.toString() } style={ props.style }>
      <div className={ cx.Children("label") }>{ props.label }:</div>
      <div className={ cx.Children("content") }>{ props.children }</div>
    </div>
  );
};
