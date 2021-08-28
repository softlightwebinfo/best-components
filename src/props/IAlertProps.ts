import { ReactNode } from "react";
import { IProps } from "../interfaces";
import { TAlertType } from "../types/TAlertType";

export interface IAlertProps extends IProps {
  data?: string[];
  type?: TAlertType;
  isIcon?: boolean;
  isCloseable?: boolean;
  message: string;
  title?: string;
  right?: ReactNode;
  actions?: ReactNode;
  icon?: ReactNode;
  onCloseable?: (evt: any) => void;
}
