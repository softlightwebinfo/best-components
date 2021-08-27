import React from "react";
import { BEM } from "../../functions";
import { IDropdownProps } from "../../props/IDropdownProps";

export const Dropdown = (props: IDropdownProps) => {
  const cx = new BEM("Dropdown", {});
  cx.Append(props.className);
  return (
    <div className={ cx.toString() }>
      <span>{ props.trigger }</span>
      <DropdownMenu>

      </DropdownMenu>
    </div>
  );
};
