import { ReactNode } from "react";
import { IProps } from "../interfaces/IProps";
import { IAvatarProps } from "./IAvatarProps";

export interface ITaskLineCardWidgetProps extends IProps {
  title: string;
  subTitle: string;
  numberTotal: number;
  number: number;
  actions?: ReactNode;
  team: IAvatarProps[];
  progress: number;
}
