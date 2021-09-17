import React from "react";
import { BEM } from "../../functions";
import { ICardProps } from "../../props/ICardProps";

export const Card = (props: ICardProps) => {
  const cx = new BEM("Card", {});
  cx.Append(props.className);
  return (
    <div className={ cx.toString() } style={ props.style }>
      { props.children }
    </div>
  );
};
