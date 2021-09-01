import React from "react";
import { BEM } from "../../functions";
import { IModalHeaderProps } from "../../props/IModalHeaderProps";

export const ModalHeader = (props: IModalHeaderProps) => {
  const cx = new BEM("ModalHeader", {});
  cx.Append(props.className);
  return (
    <header className={ cx.toString() } style={ props.style }>
      { props.children }
    </header>
  );
};
