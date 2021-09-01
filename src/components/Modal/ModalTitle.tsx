import React from "react";
import { BEM } from "../../functions";
import { IModalTitleProps } from "../../props/IModalTitleProps";

export const ModalTitle = (props: IModalTitleProps) => {
  const cx = new BEM("ModalTitle", {});
  cx.Append(props.className);
  return (
    <h3 className={ cx.toString() } style={ props.style }>
      { props.children }
    </h3>
  );
};
