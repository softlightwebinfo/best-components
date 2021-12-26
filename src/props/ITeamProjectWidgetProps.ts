import { ReactNode } from "react";
import { IProps } from "../interfaces/IProps";
import { TAlertType } from "../types";
import { IAvatarProps } from "./IAvatarProps";

export interface ITeamProjectWidgetProps extends IProps {
  titleRight?: ReactNode;
  theme?: TAlertType;
  date?: string;
  numberTotal?: number;
  number?: number;
  team: IAvatarProps[];
  title: string | ReactNode;
  progress?: number;
}
