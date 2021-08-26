import { IProps } from "../interfaces";
import { TButtonType } from "../types";
import { TOnClick } from "../types/TOnClick";

export interface IButtonProps extends IProps {
  dashed?: boolean;
  round?: boolean;
  onClick?: TOnClick;
  disabled?: boolean;
  type?: TButtonType;
}
