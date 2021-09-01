import { useToggle } from "@codeunic/library-hooks";
import React from "react";
import { useSelectContext } from "../../context/selectContext";
import { BEM } from "../../functions";
import { ISelectMenuDropdownProps } from "../../props/ISelectMenuDropdownProps";
import { Item } from "../Item";

export const SelectMenuDropdown = (props: ISelectMenuDropdownProps) => {
  const context = useSelectContext();

  const [show, { toggle }] = useToggle(true);
  const cx = new BEM("SelectMenuDropdown", {});
  cx.Append(props.className);

  const HeaderItem = () => (
    <>
      { props.label }
    </>
  );

  return (
    <div className={ cx.toString() } style={ props.style }>
      <Item onClick={ toggle } className={ cx.Children("item") }>
        { context?.renderMenuGroup?.(props.label, {
          component: HeaderItem,
          children: props.children,
          props,
        }) ?? <HeaderItem/> }
        <i className={ show ? "fa fa-chevron-down" : "fa fa-chevron-left" }/>
      </Item>
      { show && (props.children) }
    </div>
  );
};
