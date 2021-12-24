import React from "react";
import { BEM } from "../../functions";
import { IGridDefaultProps } from "../../props/IGridDefaultProps";

export const GridDefaultItem = (props: IGridDefaultProps) => {
  const cx = new BEM("GridDefaultItem", {
    xs: props.xs,
    sm: props.sm,
    md: props.md,
    lg: props.lg,
    xl: props.xl,
    col: props.col,
  });
  cx.Append(props.className);
  return (
    <div className={ cx.toString() } style={ props.style }>
      { props.children }
    </div>
  );
};
