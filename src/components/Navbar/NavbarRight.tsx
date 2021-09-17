import React from "react";
import { BEM } from "../../functions";
import { INavbarRightProps } from "../../props/INavbarRightProps";

export const NavbarRight = (props: INavbarRightProps) => {
  const cx = new BEM("NavbarRight", {});
  cx.Append(props.className);

  return(
    <div className={ cx.toString() } style={ props.style }>
      {props.children}
    </div>
  )
};
