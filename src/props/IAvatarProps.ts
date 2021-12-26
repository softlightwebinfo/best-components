import { ReactNode } from "react";
import { IProps } from "../interfaces";
import { TSize } from "../types";

export interface IAvatarProps extends IProps {
  onClick?(evt: any): void;

  title?: string;
  rounded?: boolean;
  image?: string;
  name?: string | ReactNode;
  alt?: string;
  size?: TSize;
}
