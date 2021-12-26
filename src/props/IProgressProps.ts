import { IProps } from "../interfaces/IProps";
import { TAlertType } from "../types";

export interface IProgressProps extends IProps {
  theme?: TAlertType | string;
  value: number;
}
