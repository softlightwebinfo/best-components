import { ReactNode } from "react";
import { IProps } from "../interfaces";

export interface ICardHeadingProps extends IProps {
  footer?: ReactNode;
  actions?: ReactNode;
  title?: string | ReactNode;
  subTitle?: string | ReactNode;
}

