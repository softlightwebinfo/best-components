import { IProps } from "../interfaces/IProps";
import { TAlertType } from "../types";

export interface IDotProps extends IProps {
  theme?: TAlertType;
}

export interface IDotItemProps extends IDotProps {
  title?: string;
}
