import React from "react";
import { BEM } from "../../functions";
import { ISpaceBetweenProps } from "../../props/ISpaceBetweenProps";

export const SpaceBetween = (props: ISpaceBetweenProps) => {
  const cx = new BEM("SpaceBetween", {});
  cx.Append(props.className);

  return (
    <div className={ cx.toString() } style={ props.style }>
      { props.children }
    </div>
  );
};
