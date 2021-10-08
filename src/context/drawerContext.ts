import { createContext, useContext } from "react";

export interface IModalContext {
  open?: boolean;
  onClose?: (evt: any) => any;
}

export const ModalContext = createContext<IModalContext>({});
export const useModalContext = () => useContext(ModalContext);
