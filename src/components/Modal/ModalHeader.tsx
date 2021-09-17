import React from "react";
import { useModalContext } from "../../context/modalContext";
import { BEM } from "../../functions";
import { IModalHeaderProps } from "../../props/IModalHeaderProps";
import { Title } from "../Titlte";

export const ModalHeader = (props: IModalHeaderProps) => {
  const context = useModalContext();
  const cx = new BEM("ModalHeader", {});
  cx.Append(props.className);
  return (
    <header className={ cx.toString() } style={ props.style }>
      { typeof props.children === "string" ? (
        <Title>{ props.children }</Title>
      ) : props.children }
      <i onClick={ context.onClose } className={ cx.Children("closeable", "fa fa-times") }/>
    </header>
  );
};
