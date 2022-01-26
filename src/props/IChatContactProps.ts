import { ReactNode } from "react";
import { IProps } from "../interfaces";

export interface IChatContactProps extends IProps {
  mute?: ReactNode;

  onClickMute?(evt: any): any;

  dropdownSettings?: ReactNode;
  description?: ReactNode;

  onClose?(): void;
}
