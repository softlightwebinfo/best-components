import { ReactNode } from "react";
import { IProps } from "../interfaces";
import { TAlertType, TButtonType, TOnClick, TSize } from "../types";

export interface IButtonProps extends IProps {
  dashed?: boolean;
  block?: boolean;
  dark?: boolean;
  primary?: boolean;
  round?: boolean;
  default?: boolean;
  onClick?: TOnClick;
  disabled?: boolean;
  icon?: ReactNode;
  type?: TButtonType;
  size?: TSize;
  theme?: TAlertType;
  raiser?: boolean;
}
