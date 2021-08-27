import React from "react";
import { BEM } from "../../functions";
import { IDropdownMenuProps } from "../../props/IDropdownMenuProps";

export const DropdownMenu = (props: IDropdownMenuProps) => {
  const cx = new BEM("DropdownMenu", {});
  cx.Append(props.className);
  return (
    <div className={ cx.toString() }>
      { props.children }
    </div>
  );
};
