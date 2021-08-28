import React from "react";
import { BEM } from "../../functions";
import { ICardBodyProps } from "../../props/ICardBodyProps";

export const CardBody = (props: ICardBodyProps) => {
  const cx = new BEM("CardBody", {});
  cx.Append(props.className);
  return (
    <section className={ cx.toString() } style={ props.style }>
      { props.children }
    </section>
  );
};
