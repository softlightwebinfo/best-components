import React, { useRef } from "react";
import { BEM } from "../../functions";
import { IDialogProps } from "../../props/IDialogProps";
import { Modal } from "../Modal/Modal";
import { ModalBody } from "../Modal/ModalBody";
import { ModalFooter } from "../Modal/ModalFooter";
import { ModalHeader } from "../Modal/ModalHeader";
import { Overlay } from "../Overlay/Overlay";

export const Dialog = (props: IDialogProps) => {
  const ref = useRef(null);
  const cx = new BEM("Dialog", {});
  cx.Append(props.className);

  return (
    <Overlay>
      <Modal ref={ref}>
        <ModalHeader></ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </Overlay>
  );
};
