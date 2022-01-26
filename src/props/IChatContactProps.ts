import { ReactNode } from "react";
import { IProps } from "../interfaces";

export interface IChatContactProps extends IProps {
  onClickMute?(evt: any): any;

  dropdownSettings?: ReactNode;
  description?: ReactNode;

  onClose?(): void;
}
