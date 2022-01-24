import { IContactAppContext } from "../context/ContactAppProvider";
import { IProps } from "../interfaces";
import { IMessage } from "../interfaces/IMessage";

export interface IContactAppProviderProps extends IProps {
  children?(data: IContactAppContext, ref: any): React.ReactNode;

  startApp?(): void;

  addMessageChat?(message: string): void;

  onSubmit(ev: any, message: string, data: IContactAppFunctions): void;

  onLoadMessages(): Promise<IMessage[]>;

  onLoadEndMessages?(refBody: any): void;

  onToggle?(refBody: any): void;
}

export interface IContactAppFunctions {
  refBody?: any;

  onChange?(evt: any): any;

  setMessagesChat?(evt: any): any;

  addMessageChat?(message: IMessage): any;
}
