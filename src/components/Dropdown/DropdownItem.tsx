import React from "react";
import { BEM } from "../../functions";
import { IDropdownItemProps } from "../../props/IDropdownItemProps";
import { Item } from "../Item/Item";

export const DropdownItem = (props: IDropdownItemProps) => {
  const cx = new BEM("DropdownItem", {});
  cx.Append(props.className);
  return (
    <Item style={ props.style } onClick={ props.onClick } className={ cx.toString() }>
      { props.children }
    </Item>
  );
};
