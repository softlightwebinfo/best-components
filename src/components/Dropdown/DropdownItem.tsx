import React from "react";
import { BEM } from "../../functions";
import { IDropdownItemProps } from "../../props";
import { Item } from "../Item";

export const DropdownItem = (props: IDropdownItemProps) => {
  const cx = new BEM("DropdownItem", {});
  cx.Append(props.className);
  return (
    <Item
      style={ props.style }
      className={ cx.toString() }
      icon={ props.icon }
      badge={ props.badge }
      onClick={ props.onClick }
    >
      { props.children }
    </Item>
  );
};
