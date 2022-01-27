import { ReactNode } from "react";
import { IContactAppProviderProps } from "./IContactAppProviderProps";
import { IFabProps } from "./IFabProps";

export interface IContactAppProps extends IContactAppProviderProps {
  onClickMute?(evt: any): any;

  fab?: IFabProps;
  mute?: ReactNode;
  dropdownSettings?: ReactNode;
  description?: ReactNode;
  relative?: boolean;
}
