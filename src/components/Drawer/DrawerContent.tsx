import React, { forwardRef } from "react";
import { BEM } from "../../functions";
import { IDrawerContentProps } from "../../props/IDrawerContentProps";
import { Scroll } from "../Scroll/Scroll";

export const DrawerContent = forwardRef((props: IDrawerContentProps, ref: any) => {
  const cx = new BEM("DrawerContent", {});
  cx.Append(props.className);
  return (
    <Scroll
      ref={ props.ref }
      className={ cx.toString() }
      style={ props.style }
    >
      { props.children }
    </Scroll>
  );
});
