import { ReactNode } from "react";
import { IProps } from "../interfaces";

export interface IPageHeaderProps extends IProps {
  extra?: ReactNode;
  onBack?: () => void;
  title: string;
  subTitle: string;
}
