import React from "react";
import { BEM } from "../../functions";
import { ICardFooterProps } from "../../props/ICardFooterProps";

export const CardFooter = (props: ICardFooterProps) => {
  const cx = new BEM("CardFooter", {});
  cx.Append(props.className);
  return (
    <footer className={ cx.toString() } style={ props.style }>
      { props.children }
    </footer>
  );
};
