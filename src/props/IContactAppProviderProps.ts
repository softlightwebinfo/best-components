import { ReactNode } from "react";
import { IContactAppContext } from "../context/ContactAppProvider";
import { IProps } from "../interfaces";
import { IMessage } from "../interfaces/IMessage";

export interface IContactAppProviderProps extends IProps {
  children?(data: IContactAppContext): ReactNode;

  startApp?(): void;

  addMessageChat?(message: string): void;

  onSubmit(ev: any, message: string): void;

  onLoadMessages(): Promise<IMessage[]>;
}
