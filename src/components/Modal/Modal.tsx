import React, { forwardRef } from "react";
import { ModalContext } from "../../context/modalContext";
import { BEM } from "../../functions";
import { IModalProps } from "../../props/IModalProps";

export const Modal = forwardRef((props: IModalProps, ref: any) => {
  const cx = new BEM("Modal", {});
  cx.Append(props.className);

  const value = {
    onClose: (evt: any) => {
      props.onClose?.(evt, ref);
    },
  };

  return (
    <ModalContext.Provider value={ value }>
      <div className={ cx.toString() } style={ props.style } ref={ ref }>
        { props.children }
      </div>
    </ModalContext.Provider>
  );
});
