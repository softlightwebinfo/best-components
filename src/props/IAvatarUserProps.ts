import { ReactNode } from "react";
import { IProps } from "../interfaces";
import { TSize } from "../types";

export interface IAvatarUserProps extends IProps {
  size?: TSize;
  title: string | ReactNode;
  subTitle?: string | ReactNode;
  image?: string;
  content?: ReactNode;
}
