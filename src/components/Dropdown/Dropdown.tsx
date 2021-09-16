import React, { useRef, useState } from "react";
import { BEM } from "../../functions";
import { useOutside } from "../../hooks/useOutside";
import { IDropdownProps } from "../../props";
import { DropdownMenu } from "./DropdownMenu";

export const Dropdown = (props: IDropdownProps) => {
  const cx = new BEM("Dropdown", {
    [props.placement ?? '']: !!props.placement,
  });
  cx.Append(props.className);

  const wrapperRef = useRef(null);
  const [open, toggle] = useState(false);

  useOutside(wrapperRef, open, () => {
    if (open) toggle(false);
  });

  return (
    <div className={ cx.toString() } ref={ wrapperRef }>
      <span onClick={ () => toggle(!open) }>{ props.trigger }</span>
      { open && (
        <DropdownMenu className={ cx.Children("menu") }>
          { props.children }
        </DropdownMenu>
      ) }
    </div>
  );
};
