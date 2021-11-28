import React from "react";
import { BEM } from "../../functions";
import { IGridDefaultProps } from "../../props/IGridDefaultProps";

export const GridDefault = (props: IGridDefaultProps) => {
  const cx = new BEM("GridDefault", {});
  cx.Append(props.className);
  return (
    <div className={ cx.toString() } style={ props.style }>
      { props.children }
    </div>
  );
};
