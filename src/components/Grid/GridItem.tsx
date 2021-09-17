import React from "react";
import { BEM } from "../../functions";
import { IGridItemProps } from "../../props/IGridItemProps";

export const GridItem = (props: IGridItemProps) => {
  const cx = new BEM("GridItem", {});
  cx.Append(props.className);
  return (
    <div className={ cx.toString() } style={ props.style }>
      { props.children }
    </div>
  );
};
