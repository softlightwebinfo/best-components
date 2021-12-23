import { ReactNode } from "react";
import { IProps } from "../interfaces";

export interface IDrawerHeaderProps extends IProps {
  title: ReactNode;
  transparent?: boolean;

  onClose?(): void;
}
