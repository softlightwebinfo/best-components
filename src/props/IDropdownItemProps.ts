import { ReactNode } from "react";
import { IProps } from "../interfaces";

export interface IDropdownItemProps extends IProps {
  icon?: ReactNode;
  badge?: string ;
  onClick?: (evt: any) => void;
}
