import React, { forwardRef } from "react";
import { BEM } from "../../functions";
import { IModalProps } from "../../props/IModalProps";

export const Modal = forwardRef((props: IModalProps, ref: any) => {
  const cx = new BEM("Modal", {});
  cx.Append(props.className);
  return (
    <div className={ cx.toString() } style={ props.style } ref={ ref } onClick={ props.onClick }>
      { props.children }
    </div>
  );
});
