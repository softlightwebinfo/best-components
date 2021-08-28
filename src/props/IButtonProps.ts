import { ReactNode } from "react";
import { IProps } from "../interfaces";
import { TButtonType, TOnClick, TSize } from "../types";

export interface IButtonProps extends IProps {
  dashed?: boolean;
  round?: boolean;
  default?: boolean;
  onClick?: TOnClick;
  disabled?: boolean;
  icon?: ReactNode;
  type?: TButtonType;
  size?: TSize;
}
