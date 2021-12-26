import { ReactNode } from "react";
import { IProps } from "../interfaces/IProps";
import { TAlertType } from "../types";

export interface IStatWidgetProps extends IProps {
  title: string | ReactNode;
  subtitle: string | ReactNode;
  progress: number;
  theme?: TAlertType | string;
}
