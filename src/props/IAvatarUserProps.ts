import { IProps } from "../interfaces";
import { TSize } from "../types";

export interface IAvatarUserProps extends IProps {
  size?: TSize;
  title: string;
  subTitle: string;
  image?: string;
}
