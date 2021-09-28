import { ReactNode } from "react";
import { IProps } from "../interfaces";

export interface IPageProps extends IProps {
  center?: boolean;
  reverse?: boolean;
  left?: ReactNode;
  right?: ReactNode;
}
