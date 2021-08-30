import { ReactNode } from "react";
import { IProps } from "../interfaces";

export interface IItemProps extends IProps {
  icon?: ReactNode;
  badge?: string;
  onClick?: (evt: any) => void;
}
