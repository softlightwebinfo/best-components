import React from "react";
import { BEM } from "../../functions";
import { ICardTitleProps } from "../../props/ICardTitleProps";

export const CardTitle = (props: ICardTitleProps) => {
  const cx = new BEM("CardTitle", {});
  cx.Append(props.className);
  return (
    <h3 className={ cx.toString() } style={ props.style }>
      { props.children }
    </h3>
  );
};
