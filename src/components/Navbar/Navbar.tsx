import React from "react";
import { BEM } from "../../functions";
import { INavbarProps } from "../../props/INavbarProps";

export const Navbar = (props: INavbarProps) => {
  const cx = new BEM("Navbar", {
    fixed: props.fixed,
  });
  cx.Append(props.className);
  return (
    <div className={ cx.toString() } style={ props.style }>
      { props.top }
      <div className={ cx.Children("content") }>
        { props.children }
      </div>
      { props.bottom }
    </div>
  );
};
