import { IProps } from "../interfaces";
import { TButtonType, TSize } from "../types";
import { TOnClick } from "../types";

export interface IButtonProps extends IProps {
  dashed?: boolean;
  round?: boolean;
  default?: boolean;
  onClick?: TOnClick;
  disabled?: boolean;
  type?: TButtonType;
  size?: TSize;
}
