import React from "react";
import { BEM } from "../../functions";
import { IDrawerFooterProps } from "../../props/IDrawerFooterProps";

export const DrawerFooter = (props: IDrawerFooterProps) => {
  const cx = new BEM("DrawerFooter", {});
  cx.Append(props.className);
  return (
    <footer className={ cx.toString() } style={ props.style }>
      { props.children }
    </footer>
  );
};
