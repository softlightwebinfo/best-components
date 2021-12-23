import { ReactNode } from "react";
import { IProps } from "../interfaces";
import { TAlertType } from "../types";

export interface IBadgeProps extends IProps {
  radius?: boolean;
  transparent?: boolean;
  type?: TAlertType;
  rounded?: boolean;
  onClick?: (evt: any) => void;
  isCloseable?: boolean;
  icon?: ReactNode;
  label: string;
  default?: boolean;
  textColor?: string;
  backgroundColor?: string;
}
