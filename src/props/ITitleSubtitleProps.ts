import { IProps } from "../interfaces";

export interface ITitleSubtitleProps extends IProps {
  title: string;
  subTitle: string;
  color?: string;
  between?: boolean;
}