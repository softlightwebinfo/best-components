import React from "react";
import { BEM } from "../../functions";
import { IModalBodyProps } from "../../props/IModalBodyProps";

export const ModalBody = (props: IModalBodyProps) => {
  const cx = new BEM("ModalBody", {});
  cx.Append(props.className);
  return (
    <section className={ cx.toString() } style={ props.style }>
      { props.children }
    </section>
  );
};
