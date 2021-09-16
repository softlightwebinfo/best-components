import { ReactNode } from "react";
import { IProps } from "../interfaces";

export interface INavbarProps extends IProps {
  bottom?: ReactNode;
  top?: ReactNode;
  fixed?: boolean;
}
