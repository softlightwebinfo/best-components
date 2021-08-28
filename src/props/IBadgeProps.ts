import { ReactNode } from "react";
import { IProps } from "../interfaces";
import { TAlertType } from "../types";

export interface IBadgeProps extends IProps {
  type?: TAlertType;
  rounded?: boolean;
  onClick?: (evt: any) => void;
  isCloseable?: boolean;
  icon?: ReactNode;
  label: string;
}
