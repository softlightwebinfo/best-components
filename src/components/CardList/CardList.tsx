import React from "react";
import { BEM } from "../../functions";
import { ICardListProps } from "../../props/ICardListProps";

export const CardList = (props: ICardListProps) => {
  const cx = new BEM("CardList", {
    noBorder: props.noBorder,
    noBorderItems: props.noBorderItems,
  });
  cx.Append(props.className);
  return (
    <div className={ cx.toString() } style={ props.style }>
      { props.children }
    </div>
  );
};
