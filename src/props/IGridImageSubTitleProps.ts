import { ReactNode } from "react";
import { IButtonProps } from "./IButtonProps";
import { IGridImageItemProps } from "./IGridImageItemProps";

export interface IGridImageSubTitleProps extends IGridImageItemProps {
  button: IButtonProps;
  items: IGridImageSubTitleItem[];
}

export interface IGridImageSubTitleItem {
  title: ReactNode;
  description: ReactNode;
  icon: ReactNode;
}
