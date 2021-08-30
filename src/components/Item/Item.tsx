import React from "react";
import { BEM } from "../../functions";
import { IItemProps } from "../../props";
import { Badge } from "../Badge";

export const Item = (props: IItemProps) => {
  const cx = new BEM("Item", {});
  cx.Append(props.className);
  return (
    <div onClick={ props.onClick } className={ cx.toString() } style={ props.style }>
      { props.icon && <span className={ cx.Children("icon") }>{ props.icon }</span> }
      <span className={ cx.Children("content") }>{ props.children }</span>
      { props.badge && <Badge label={ props.badge }/> }
    </div>
  );
};
