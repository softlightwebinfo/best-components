import { ReactNode } from "react";
import { ICategory } from "../interfaces";
import { IProps } from "../interfaces/IProps";

export interface ICardGroupProps extends IProps {
  buttonText: string | ReactNode;
  actions: ICategory[];
  title: string | ReactNode;
  subTitle?: string | ReactNode;
}
