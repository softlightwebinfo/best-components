import React from "react";
import { BEM } from "../../functions";
import { INavbarLogoProps } from "../../props/ INavbarLogoProps";

export const NavbarLogo = (props: INavbarLogoProps) => {
  const cx = new BEM("NavbarLogo", {});
  cx.Append(props.className);
  return (
    <div className={ cx.toString() } style={ props.style }>
      <img src={ props.image } alt={ props.title } title={ props.title }/>
    </div>
  );
};
