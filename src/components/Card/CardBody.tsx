import React from "react";
import { BEM } from "../../functions";
import { ICardBodyProps } from "../../props";

export const CardBody = (props: ICardBodyProps) => {
  const cx = new BEM("CardBody", {
    flex: props.flex,
  });
  cx.Append(props.className);
  return (
    <section
      className={ cx.toString() }
      style={ {
        ...props.style,
        ...props.gap ? { gap: props.gap } : {},
      } }
    >
      { props.children }
    </section>
  );
};
