import React, { useRef } from "react";
import { BEM } from "../../functions";
import { useOutside } from "../../hooks/useOutside";
import { IDialogProps } from "../../props/IDialogProps";
import { Modal } from "../Modal/Modal";
import { ModalBody } from "../Modal/ModalBody";
import { ModalFooter } from "../Modal/ModalFooter";
import { ModalHeader } from "../Modal/ModalHeader";
import { Overlay } from "../Overlay/Overlay";

export const Dialog = (props: IDialogProps) => {
  const ref = useRef(null);

  const cx = new BEM("Dialog", {
    open: props.open,
  });

  cx.Append(props.className);

  useOutside(ref, props.open, () => props.onCLickOutSide?.(null));

  return (
    <Overlay className={ cx.toString() } style={ props.style }>
      <Modal ref={ ref } onClose={ props.onCLickOutSide }>
        { props.header && <ModalHeader>{ props.header }</ModalHeader> }
        <ModalBody>{ props.children }</ModalBody>
        { props.footer && <ModalFooter>{ props.footer }</ModalFooter> }
      </Modal>
    </Overlay>
  );
};
