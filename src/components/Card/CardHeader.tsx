import React from "react";
import { BEM } from "../../functions";
import { ICardHeaderProps } from "../../props/ICardHeaderProps";

export const CardHeader = (props: ICardHeaderProps) => {
  const cx = new BEM("CardHeader", {
    default: props.default,
  });
  cx.Append(props.className);
  return (
    <header className={ cx.toString() } style={ props.style }>
      { props.children }
    </header>
  );
};
