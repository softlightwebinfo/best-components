import React from "react";
import { BEM } from "../../functions";
import { IDescriptionsProps } from "../../props/IDescriptionsProps";

export const Descriptions = (props: IDescriptionsProps) => {
  const cx = new BEM("Descriptions", {
    [props.column]: !!props.column,
  });
  cx.Append(props.className);

  return (
    <div className={ cx.toString() } style={ props.style }>
      { props.children }
    </div>
  );
};
