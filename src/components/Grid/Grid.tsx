import React from "react";
import { BEM } from "../../functions";
import { IGridProps } from "../../props/IGridProps";

export const Grid = (props: IGridProps) => {
  const cx = new BEM("Grid", {});
  cx.Append(props.className);
  return (
    <div
      className={ cx.toString() }
      style={ {
        ...props.style,
        gridTemplateColumns: `repeat(${props.cols}, 1fr)`,
      } }
    >
      { props.children }
    </div>
  );
};
