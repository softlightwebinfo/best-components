import React from "react";
import { useDrawerContext } from "../../context/drawerContext";
import { BEM } from "../../functions";
import { IDrawerHeaderProps } from "../../props/IDrawerHeaderProps";
import { Close } from "../Close/Close";
import { Title } from "../Titlte";

export const DrawerHeader = (props: IDrawerHeaderProps) => {
  const context = useDrawerContext();
  const cx = new BEM("DrawerHeader", {
    transparent: props.transparent,
  });
  cx.Append(props.className);

  const onClose = () => {
    context?.onClose?.();
    props.onClose?.();
  };

  return (
    <header className={ cx.toString() } style={ props.style }>
      <Title>{ props.title }</Title>
      { props.children && (<div className={ cx.Children("children") }>{ props.children }</div>) }
      <Close onClick={ onClose }/>
    </header>
  );
};
