import React from "react";
import { BEM } from "../../functions";
import { IModalFooterProps } from "../../props/IModalFooterProps";

export const ModalFooter = (props: IModalFooterProps) => {
  const cx = new BEM("ModalFooter", {});
  cx.Append(props.className);
  return (
    <section className={ cx.toString() } style={ props.style }>
      { props.children }
    </section>
  );
};
