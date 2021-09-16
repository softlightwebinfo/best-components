import React from "react";
import { BEM } from "../../functions";
import { INavbarItemProps } from "../../props/INavbarItemProps";

export const NavbarItem = (props: INavbarItemProps) => {
  const cx = new BEM("NavbarItem", {});
  cx.Append(props.className);
  return (
    <div className={ cx.toString() } style={ props.style }>
      { props.children }
    </div>
  );
};
