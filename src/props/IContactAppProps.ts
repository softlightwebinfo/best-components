import { ReactNode } from "react";
import { IContactAppProviderProps } from "./IContactAppProviderProps";

export interface IContactAppProps extends IContactAppProviderProps {
  onClickMute?(evt: any):any;
  dropdownSettings?: ReactNode;
  description?: ReactNode;
  relative?: boolean;
}
