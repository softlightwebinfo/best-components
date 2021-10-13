import { ReactNode } from "react";
import { IProps } from "../interfaces";

export interface ITitleSubtitleProps extends IProps {
  title: string | ReactNode;
  subTitle: string | ReactNode;
  color?: string;
  between?: boolean;
}
