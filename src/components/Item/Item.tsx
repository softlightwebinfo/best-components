import React from "react";
import { BEM } from "../../functions";
import { IItemProps } from "../../props/IItemProps";

export const Item = (props: IItemProps) => {
  const cx = new BEM("Item", {});
  cx.Append(props.className);
  return (
    <div onClick={props.onClick} className={ cx.toString() } style={ props.style }>
      { props.children }
    </div>
  );
};
