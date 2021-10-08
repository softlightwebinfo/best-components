import React from "react";
import { BEM } from "../../functions";
import { IDrawerContentProps } from "../../props/IDrawerContentProps";
import { Scroll } from "../Scroll/Scroll";

export const DrawerContent = (props: IDrawerContentProps) => {
  const cx = new BEM("DrawerContent", {});
  cx.Append(props.className);
  return (
    <Scroll
      className={ cx.toString() }
      style={ props.style }
    >
      { props.children }
    </Scroll>
  );
};
