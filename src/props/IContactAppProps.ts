import { ReactNode } from "react";
import { IContactAppProviderProps } from "./IContactAppProviderProps";

export interface IContactAppProps extends IContactAppProviderProps {
  mute?: ReactNode;
  onClickMute?(evt: any):any;
  dropdownSettings?: ReactNode;
  description?: ReactNode;
  relative?: boolean;
}
