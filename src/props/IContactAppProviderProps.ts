import { ReactNode } from "react";
import { IContactAppContext } from "../context/ContactAppProvider";
import { IProps } from "../interfaces";
import { IMessage } from "../interfaces/IMessage";

export interface IContactAppProviderProps extends IProps {
  children?(data: IContactAppContext): ReactNode;

  startApp?(): void;

  addMessageChat?(message: string): void;

  onSubmit(ev: any, message: string, data: IContactAppFunctions): void;

  onLoadMessages(): Promise<IMessage[]>;
}

export interface IContactAppFunctions {
  onChange?(evt: any): any;

  setMessagesChat?(evt: any): any;

  addMessageChat?(message: IMessage): any;
}
